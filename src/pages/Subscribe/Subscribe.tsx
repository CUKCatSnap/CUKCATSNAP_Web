//구독 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import SmallPost from '../../components/Subscribe/SmallPost/SmallPost';
import * as S from './Style';
import {fetchAddressCity} from '../../apis/SubScribe/getCity';
import {fetchAddressDistrict} from '../../apis/SubScribe/getDistrict';
import {fetchAddressTown} from '../../apis/SubScribe/getTown';
import CalendarBtn from '../../components/Calendar/CalendarBtn/CalendarBtn';
import {useNavigation} from '@react-navigation/native';

const Subscribe = ({route}) => {
  // 구독 장소 페이지에서 장소를 등록했을 때 데이터를 받아옴
  const city = route?.params?.city;
  const district = route?.params?.district;
  const town = route?.params?.town;

  const [showAuthor, setShowAuthor] = useState(true); // 작가 탭 항목 표시 여부 (초기 상태 : 출력 0)
  const [showPlace, setShowPlace] = useState(false); // 리뷰 탭 항목 표시 여부
  const [isAuthorActive, setIsAuthorActive] = useState(true); // 초기 상태: 작가 탭 활성화
  const [isPlaceActive, setIsPlaceActive] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [townList, setTownList] = useState([]);
  const [showCityList, setShowCityList] = useState(false);

  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('CreateSubscribePlacePage');
  };
  // 작가 탭 항목 터치 시 항목 출력
  const handleAuthorTab = () => {
    setIsAuthorActive(true); // 작가 탭 활성화
    setIsPlaceActive(false); // 리뷰 탭 비활성화
    setShowAuthor(true);
    setShowPlace(false);
  };

  // 리뷰 탭 항목 터치 시 항목 출력
  const handlePlaceTab = () => {
    setIsAuthorActive(false);
    setIsPlaceActive(true);
    setShowAuthor(false);
    setShowPlace(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text="구독" />
        <S.SearchTabContainer>
          <S.SearchTab onPress={handleAuthorTab}>
            <S.SearchTabText>Photographer</S.SearchTabText>
            <S.SearchTabBox isActive={isAuthorActive} />
          </S.SearchTab>
          <S.SearchTab onPress={handlePlaceTab}>
            <S.SearchTabText>Place</S.SearchTabText>
            <S.SearchTabBox isActive={isPlaceActive} />
          </S.SearchTab>
        </S.SearchTabContainer>
        <S.SubscribeContainer>
          {showAuthor && (
            <S.SubscribeBox>
              <SmallPost image={require('../../images/sample3.png')} />
              <SmallPost image={require('../../images/sample2.png')} />
              <SmallPost image={require('../../images/sample1.png')} />
              <SmallPost image={require('../../images/sample3.png')} />
              <SmallPost image={require('../../images/sample2.png')} />
              <SmallPost image={require('../../images/sample1.png')} />
              <SmallPost image={require('../../images/sample3.png')} />
              <SmallPost image={require('../../images/sample2.png')} />
              <SmallPost image={require('../../images/sample1.png')} />
              <SmallPost image={require('../../images/sample3.png')} />
              <SmallPost image={require('../../images/sample2.png')} />
              <SmallPost image={require('../../images/sample1.png')} />
            </S.SubscribeBox>
          )}
          {showPlace && (
            <View>
              <View>
                <Text>도/시: {city?.name || '선택 안 됨'}</Text>
                <Text>시/군/구: {district?.name || '선택 안 됨'}</Text>
                <Text>읍/면/동: {town?.name || '선택 안 됨'}</Text>
              </View>
              <CalendarBtn
                text={'구독 장소 등록하기'}
                onPress={() => handleNavigate()}
              />
            </View>
          )}
        </S.SubscribeContainer>
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

export default Subscribe;
