// 홈 화면 페이지
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import MyReserve from '../../components/Home/MyReserve/MyReserve';
import RecentReserve from '../../components/Home/RecentReserve/Recentreserve';
import * as S from './Style';
import QuickIcon from '../../components/Home/Quickicon/QuickIcon';
import Title from '../../components/Home/Title/Title';
import Header from '../../components/Header/Header';
import QuickCalendar from '../../components/Home/QuickCalendar/QuickCalendar';
import QuickMap from '../../components/Home/QuickMap/QuickMap';
import {fetchReservations} from '../../apis/UserReserve/getReservation';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {fetchAuthorReservations} from '../../apis/AuthorReserve/getAuthorReservation';

const Home = () => {
  const [reservations, setReservations] = useState([]); // 예약 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태 관리
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const isUser = useSelector(state => state.auth.user);

  // 예약 데이터를 가져오는 함수
  const getReservations = async () => {
    if (isAuthor) {
      try {
        //UPCOMING : 다가오는 예약만 출력 , ALL : 모든 예약 출력
        const response = await fetchAuthorReservations('ALL', 0, 5);
        console.log(response); // 응답 데이터 확인
        const newReservations =
          response?.data?.slicedData
            ?.photographerReservationInformationResponseList;
        setReservations(newReservations || []); // 데이터 저장
      } catch (err) {
        setError('예약 데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    } else if (isUser) {
      try {
        //UPCOMING : 다가오는 예약만 출력 , ALL : 모든 예약 출력
        const response = await fetchReservations('ALL', 0, 5);
        console.log(response); // 응답 데이터 확인
        const newReservations =
          response?.data?.slicedData?.memberReservationInformationResponseList;
        setReservations(newReservations || []); // 데이터 저장
      } catch (err) {
        setError('예약 데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    }
  };

  // 화면이 포커스될 때마다 예약 데이터 새로 가져오기
  useFocusEffect(
    React.useCallback(() => {
      setLoading(true); // 로딩 상태 초기화
      getReservations(); // 데이터 새로 가져오기
    }, [isAuthor]), // isAuthor가 변경될 때마다 실행
  );

  // 렌더링 조건 설정
  let content;
  if (isAuthor || isUser) {
    content = loading ? (
      <S.LoadingContainer>
        <ActivityIndicator size="large" color="#232074" />
      </S.LoadingContainer>
    ) : error ? (
      <S.ReserveView>{error}</S.ReserveView>
    ) : reservations.length > 0 ? (
      <S.MyReserveContainer
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {reservations.map((reservation, index) => (
          <MyReserve key={index} reservation={reservation} />
        ))}
      </S.MyReserveContainer>
    ) : (
      <S.ReserveView>
        <S.ReserveText>예약이 없습니다.</S.ReserveText>
      </S.ReserveView>
    );
  } else {
    content = (
      <S.ReserveView>
        <S.ReserveText>로그인이 필요합니다.</S.ReserveText>
      </S.ReserveView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <S.Container>
          <Title text="내 예약" />
          {content}
          <S.QuickIconContainer>
            <QuickMap />
            <QuickIcon />
            <QuickCalendar />
          </S.QuickIconContainer>
          <Title text="최근 예약" />
          <S.RecentReserveContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <RecentReserve
              image={require('../../images/sample2.png')}
              nickname="나 똘똘"
            />
            <RecentReserve
              image={require('../../images/sample1.png')}
              nickname="김 무개"
            />
          </S.RecentReserveContainer>
        </S.Container>
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

export default Home;
