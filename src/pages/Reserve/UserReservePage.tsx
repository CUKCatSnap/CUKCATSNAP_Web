//유저가 예약을 할 수 있는 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Button,
  Alert,
} from 'react-native';
import {postReserve} from '../../apis/UserReserve/postReserve';
import {useNavigation} from '@react-navigation/native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import LoginBtn from '../../components/Login/LoginBtn';
import Calendar from '../../components/Calendar/Calendar';
import {fetchReserveTime} from '../../apis/UserReserve/getReserveTime';
import ReserveTime from '../../components/Reserve/ReserveTime/ReserveTime';
import * as S from './Style';
import Title from '../../components/Home/Title/Title';

const UserReservePage = ({route}) => {
  const {programId} = route.params;
  const {photographerId} = route.params;
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationName, setLocationName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [selectedTime, setSelectedTime] = useState(null); // 선택된 예약 시간

  const navigation = useNavigation();

  const [availableTimes, setAvailableTimes] = useState([]); // 날짜별 예약 가능한 시간 목록
  const [monthReserve, setMonthReserve] = useState([]); // monthReserve를 빈 배열로 설정

  useEffect(() => {
    // startTime이 없으면 실행하지 않음
    if (!startTime) {
      return;
    }

    const fetchTimes = async () => {
      try {
        const response = await fetchReserveTime(photographerId, startTime);
        if (
          response &&
          response.data &&
          response.data.photographerAvailableReservationTimeList
        ) {
          const times = response.data.photographerAvailableReservationTimeList;
          setAvailableTimes(times); // 데이터 설정
          // 예약 가능한 시간 목록을 console에 출력
          console.log('예약 가능한 시간 목록:', times);
        }
      } catch (error) {
        console.log(
          '날짜 가져오기 실패:',
          error.message || '알 수 없는 오류 발생',
        );
      }
    };

    fetchTimes();
  }, [startTime, photographerId]); // startTime이 변경될 때만 실행

  const handleTime = time => {
    // 이미 선택된 시간인 경우 해제
    if (selectedTime?.startTime === time.startTime) {
      setSelectedTime(null); // 선택 해제
      console.log('선택 해제:', time);
    } else {
      // 새로운 시간 선택
      setSelectedTime(time);
      console.log('선택된 시간:', time);
    }
  };
  const onMonthChange = () => {
    if (monthReserve.length === 0) {
      return; // monthReserve가 빈 배열일 때 아무 작업도 하지 않음
    }
  };
  const handleSubmit = async () => {
    if (!selectedTime) {
      Alert.alert('', '예약 시간을 선택해 주세요.');
      return;
    }
    const dateTime = `${startTime} ${selectedTime.startTime}`; // 날짜와 시간 합치기

    const requestBody = {
      photographerId,
      reservationLocation: {
        latitude: parseFloat(latitude), // 문자열을 실수로 변환
        longitude: parseFloat(longitude), // 문자열을 실수로 변환
        locationName,
      },
      startTime: dateTime, // 날짜와 시간 합친 값을 사용
      programId,
    };
    console.log(requestBody);

    try {
      const response = await postReserve(requestBody);

      if (response) {
        Alert.alert(
          '', // 제목
          '예약 되었습니다.', // 메시지
          [
            {text: '확인', onPress: () => navigation.goBack()}, // 확인 버튼 눌렀을 때 홈으로 이동
          ],
        );
      }
    } catch (error) {
      console.log('예약 실패', error.message || '알 수 없는 오류 발생');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text="예약하기" />
        <Calendar onDateSelect={setStartTime} onMonthChange={onMonthChange} />

        <S.TimeView>
          <Title text="예약 가능한 시간" />

          <S.TimeScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {availableTimes.length > 0 ? (
              availableTimes.map((time, index) => (
                <View key={index}>
                  <ReserveTime
                    isSelected={selectedTime?.startTime === time.startTime} // 선택된 시간인지 확인
                    text={time.startTime}
                    onPress={() => handleTime(time)} // 시간 클릭 시 handleTime 호출
                    disabled={!time.isAvailableReservation}
                  />
                </View>
              ))
            ) : (
              <S.PosView>
                <S.TimeText>예약 가능한 시간이 없습니다.</S.TimeText>
              </S.PosView>
            )}
          </S.TimeScrollView>

          <Title text="위치" />
          <S.PosText>
            지도에서 위치를 선택 후에 예약할 수 있습니다. 현재는 임시 위도와
            경도를 설정합니다.
          </S.PosText>
          <S.PosText>위도</S.PosText>
          <TextInput
            keyboardType="numeric"
            value={latitude.toString()}
            onChangeText={text => setLatitude(text)}
          />

          <S.PosText>경도</S.PosText>
          <TextInput
            keyboardType="numeric"
            value={longitude.toString()}
            onChangeText={text => setLongitude(text)}
          />

          <S.PosText>장소 이름</S.PosText>
          <TextInput value={locationName} onChangeText={setLocationName} />

          <LoginBtn text="예약하기" onPress={handleSubmit} />
        </S.TimeView>
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

export default UserReservePage;
