import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import * as S from './Style'; // 스타일링 파일
import {fetchReservations} from '../../apis/getReservation'; // API 요청 함수
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage 추가

const MyReservePage = () => {
  const [reservations, setReservations] = useState([]); // 예약 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리

  // useEffect를 통해 예약 데이터를 가져오는 함수 호출
  useEffect(() => {
    const getAccessToken = async () => {
      try {
        // AsyncStorage에서 accessToken 가져오기
        const token = await AsyncStorage.getItem('accessToken');
        if (!token) {
          setError('Access token is missing');
          return;
        }

        // 예약 데이터 요청
        setLoading(true);
        const fetchedReservations = await fetchReservations(token); // fetchReservations 함수 호출
        setReservations(fetchedReservations); // 가져온 예약 데이터를 상태에 저장
      } catch (error) {
        setError('Failed to fetch reservations');
      } finally {
        setLoading(false); // 로딩 상태 false
      }
    };

    getAccessToken(); // 토큰을 가져와서 예약 데이터를 요청
  }, []); // 컴포넌트가 마운트될 때 한 번만 호출

  if (loading) {
    return <Text>로딩 중...</Text>; // 로딩 중일 때 표시
  }

  if (error) {
    return <Text>{error}</Text>; // 에러가 발생하면 에러 메시지 표시
  }

  return (
    <SafeAreaView>
      <Text>내 예약 페이지 입니다. 예약 정보를 볼 수 있습니다.</Text>
      <FlatList
        data={reservations}
        keyExtractor={item => item.reservationId.toString()} // 예약 ID를 key로 사용
        renderItem={({item}) => (
          <View>
            <Text>예약 ID: {item.reservationId}</Text>
            <Text>예약 시간: {new Date(item.startTime).toLocaleString()}</Text>
            <Text>프로그램 제목: {item.reservedProgramResponse.title}</Text>
            <Text>상태: {item.state}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MyReservePage;
