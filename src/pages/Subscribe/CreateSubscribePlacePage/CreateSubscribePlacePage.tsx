//구독 페이지에서 구독할 장소를 등록할 수 있는 페이지 입니다.
//구독 장소를 등록하면 구독 페이지에서 해당 장소가 나타납니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Button,
  Alert,
} from 'react-native';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import {fetchAddressCity} from '../../../apis/SubScribe/getCity';
import {fetchAddressDistrict} from '../../../apis/SubScribe/getDistrict';
import {fetchAddressTown} from '../../../apis/SubScribe/getTown';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';
import LoginBtn from '../../../components/Login/LoginBtn';

const CreateSubscribePlacePage = () => {
  const [cityList, setCityList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [townList, setTownList] = useState([]);
  const [subscribeList, setSubscribeList] = useState([]);
  const [showCityList, setShowCityList] = useState(false);
  const [showDistrictList, setShowDistrictList] = useState(false);
  const [showTownList, setShowTownList] = useState(false);
  const [isContentSelect, setIsContentSelect] = useState(false);

  const [selectedCity, setSelectedCity] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedTown, setSelectedTown] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const navigation = useNavigation();

  // 구독할 장소를 가져오는 api 함수 호출
  const getCity = async () => {
    try {
      const response = await fetchAddressCity();
      const City = response?.data?.addressResponseList;
      setCityList(City);
    } catch (error) {
      console.log('도시 정보를 가져오는 중 오류 발생');
    }
  };

  const getDistrict = async (cityId: number) => {
    try {
      const response = await fetchAddressDistrict(cityId, 0, 1000);
      const District = response?.data?.slicedData?.addressResponseList;
      setDistrictList(District);
    } catch (error) {
      console.log('도시 정보를 가져오는 중 오류 발생');
    }
  };

  const getTown = async (districtId: number) => {
    try {
      const response = await fetchAddressTown(districtId, 0, 1000);
      const Town = response?.data?.slicedData?.addressResponseList;
      setTownList(Town);
    } catch (error) {
      console.log('도시 정보를 가져오는 중 오류 발생');
    }
  };

  useEffect(() => {
    getCity();
  }, []);

  // 장소 버튼 핸들러 (해당 장소를 누르면 해당하는 항목 목록이 뜬다)
  const handleCityList = () => {
    if (showCityList === true) {
      setShowCityList(false);
    } else {
      setShowCityList(true);
    }
  };
  const handleDistrictList = () => {
    setIsContentSelect(true);
    if (showDistrictList === true) {
      setShowDistrictList(false);
    } else {
      setShowDistrictList(true);
    }
  };
  const handleTownList = () => {
    if (showTownList === true) {
      setShowTownList(false);
    } else {
      setShowTownList(true);
    }
  };

  // 도/시 선택 시 발생하는 이벤트
  const handleCity = async (id: number, name: string) => {
    setSelectedCity({id, name}); // 선택된 city 저장
    getDistrict(id);
    setShowCityList(false);
    //도/시가 변경되면 이전에 선택한 시군구, 동읍면은 초기화되어야 한다
    setSelectedDistrict(null);
    setSelectedTown(null);
    setDistrictList([]);
    setTownList([]);
  };

  // 시,군,구 선택 시 발생하는 이벤트
  const handleDistrict = async (id: number, name: string) => {
    setSelectedDistrict({id, name});
    getTown(id);
    setShowDistrictList(false);
    // 시,군,구가 변경되면 이전에 선택한 동읍면은 초기화되어야 한다
    setSelectedTown(null);
    setTownList([]);
  };
  // 읍, 면, 동 선택 시 발생하는 이벤트
  const handleTown = async (id: number, name: string) => {
    setSelectedTown({id, name});
    setShowTownList(false);
  };

  const createSubscribePlace = () => {
    Alert.alert('장소를 구독했습니다.');
    navigation.navigate('Subscribe', {
      city: selectedCity,
      district: selectedDistrict,
      town: selectedTown,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text="구독할 장소 등록" />
        <S.CreateContainer>
          <S.Sub>
            <S.CityContainer>
              <S.Box onPress={() => handleCityList()}>
                <S.City isSelect={!!selectedCity}>
                  {selectedCity?.name || '시/도'}
                </S.City>
              </S.Box>
              <S.CityBox>
                {showCityList && (
                  <View>
                    {cityList.map(city => (
                      <View key={city.id}>
                        <S.Content
                          onPress={() => handleCity(city.id, city.addressName)}
                          isSelect={selectedCity?.id === city.id}>
                          <S.ContentText>{city.addressName}</S.ContentText>
                        </S.Content>
                      </View>
                    ))}
                  </View>
                )}
              </S.CityBox>
              <S.Box onPress={() => handleDistrictList()}>
                <S.City isSelect={!!selectedDistrict}>
                  {selectedDistrict?.name || '시/군/구'}
                </S.City>
              </S.Box>
              <S.CityBox>
                {showDistrictList && (
                  <View>
                    {districtList?.map(district => (
                      <View key={district.id}>
                        <S.Content
                          title={district.addressName}
                          onPress={() =>
                            handleDistrict(district.id, district.addressName)
                          }
                          isSelect={selectedDistrict?.id === district.id}>
                          <S.ContentText>{district.addressName}</S.ContentText>
                        </S.Content>
                      </View>
                    ))}
                  </View>
                )}
              </S.CityBox>
              <S.Box onPress={() => handleTownList()}>
                <S.City isSelect={!!selectedTown}>
                  {selectedTown?.name || '읍/면/동'}
                </S.City>
              </S.Box>
              <S.CityBox>
                {showTownList && (
                  <View>
                    {townList?.map(town => (
                      <View key={town.id}>
                        <S.Content
                          title={town.addressName}
                          onPress={() => handleTown(town.id, town.addressName)}
                          isSelect={selectedTown?.id === town.id}>
                          <S.ContentText>{town.addressName}</S.ContentText>
                        </S.Content>
                      </View>
                    ))}
                  </View>
                )}
              </S.CityBox>
            </S.CityContainer>
            <View />
          </S.Sub>
          <S.Sub>
            <LoginBtn
              text={'등록하기'}
              onPress={() => createSubscribePlace()}
            />
          </S.Sub>
        </S.CreateContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default CreateSubscribePlacePage;
