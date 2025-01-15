import React, {useEffect, useState, useCallback, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import * as S from './Style'; // 스타일링 파일
import {fetchReservations} from '../../apis/UserReserve/getReservation';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage 추가
import {useSelector} from 'react-redux';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import ReserveComponent from '../../components/Reserve/ReserveComponent/ReserveComponent';

const MyReservePage = () => {
  const [reservations, setReservations] = useState([]); // 예약 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리
  const [page, setPage] = useState(0); // 페이지 상태
  const [size] = useState(2); // 한 번에 불러올 데이터 개수
  const [hasMore, setHasMore] = useState(true); // 더 이상 불러올 데이터가 있는지 여부
  const flatListRef = useRef(null); // FlatList ref 추가
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const isUser = useSelector(state => state.auth.user);

  // 예약 데이터 가져오는 함수
  const getReservations = useCallback(async () => {
    if (!hasMore) {
      return;
    } // 더 이상 데이터가 없으면 요청하지 않음

    try {
      setLoading(true);
      const response = await fetchReservations('ALL', page, size); // 페이지와 크기를 파라미터로 보냄
      const newReservations =
        response?.data?.slicedData?.memberReservationInformationResponseList;

      if (newReservations && newReservations.length > 0) {
        setReservations(prevReservations => [
          ...prevReservations, // 기존 데이터 유지
          ...newReservations, // 새로 가져온 데이터 추가
        ]);
      } else {
        setHasMore(false); // 더 이상 데이터가 없으면 상태 변경
      }
    } catch (error) {
      setError('예약 데이터를 가져오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }, [page, size, hasMore]);

  useEffect(() => {
    getReservations();
  }, [getReservations]);

  // 스크롤 끝에 도달했을 때 호출되는 함수
  const loadMoreData = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1); // 페이지 증가
    }
  };

  if (loading && page === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#232074" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <ContentsHeader text="내 예약" />
      {isAuthor ? (
        <View>
          <Text>작가입니다.</Text>
        </View>
      ) : isUser ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
          data={reservations}
          keyExtractor={item => item.reservationId.toString()} // 예약 ID를 key로 사용
          renderItem={({item}) => <ReserveComponent item={item} />} // ReservationItem 컴포넌트를 사용
          onEndReached={loadMoreData} // 끝에 도달했을 때 추가 데이터 로드
          onEndReachedThreshold={0.5} // 리스트 끝에서 얼마나 남았을 때 호출할지 설정 (10%)
          initialNumToRender={size} // 처음에 렌더링할 아이템 개수
          maxToRenderPerBatch={size} // 한 번에 렌더링할 최대 아이템 개수
          windowSize={5} // FlatList의 렌더링 윈도우 크기
        />
      ) : (
        <View>
          <Text>로그인이 필요합니다.</Text>
        </View>
      )}

      {error && <Text style={{color: 'red'}}>{error}</Text>}

      {reservations.length === 0 && !loading && !error && (
        <Text>예약이 없습니다.</Text>
      )}
    </SafeAreaView>
  );
};

export default MyReservePage;
