//캘린더 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Calendar from '../../components/Calendar/Calendar';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import * as S from './Style';
import Title from '../../components/Home/Title/Title';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {fetchReserveDay} from '../../apis/UserReserve/getReserveDay';
import {fetchAuthorReserveDay} from '../../apis/AuthorReserve/getAuthorReserveDay';
import ReserveAuthorBox from '../../components/Reserve/ReserveComponent/ReserveAuthorBox/ReserveAuthorBox';
import ReserveUserBox from '../../components/Reserve/ReserveComponent/ReserveUserBox/ReserveUserBox';
import {fetchReserveMonth} from '../../apis/UserReserve/getReserveMonth';
import {fetchAuthorReserveMonth} from '../../apis/AuthorReserve/getAuthorReserveMonth';

const MyCalendar = () => {
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const user = useSelector(state => state.auth.user);
  const navigation = useNavigation(); // 네비게이션 객체 가져오기
  const [date, setDate] = useState('');
  const [reserve, setReserve] = useState([]);
  const [month, setMonth] = useState('');
  const [monthReserve, setMonthReserve] = useState([]);

  //유저의 예약 목록(일 선택 시)
  const dayReserveUser = async (day: string) => {
    try {
      const response = await fetchReserveDay(day);

      setReserve(response.data.memberReservationInformationResponseList); // 올바른 데이터 설정
    } catch (error) {
      console.log(
        '날짜 가져오기 실패:',
        error.message || '알 수 없는 오류 발생',
      );
    }
  };

  //작가의 예약 목록 (일 선택 시)
  const dayReserveAuthor = async (day: string) => {
    try {
      const response = await fetchAuthorReserveDay(day);

      setReserve(response.data.photographerReservationInformationResponseList); // 올바른 데이터 설정
    } catch (error) {
      console.log(
        '날짜 가져오기 실패:',
        error.message || '알 수 없는 오류 발생',
      );
    }
  };
  // 날짜 선택 핸들러
  const handleDateSelect = (selectedDate: string) => {
    setDate(selectedDate); // 선택한 날짜 업데이트

    //유저면 유저의 예약, 작가면 작가의 예약 업데이트
    if (isAuthor) {
      dayReserveAuthor(selectedDate);
    } else if (user) {
      dayReserveUser(selectedDate);
    }
  };

  // 첫 렌더링 시 month가 없으면 초기화
  useEffect(() => {
    console.log('현재 달 가져오기');
    const initialMonth = new Date();
    const year = initialMonth.getFullYear();
    const month = (initialMonth.getMonth() + 1).toString().padStart(2, '0');
    const formattedMonth = `${year}-${month}`;
    setMonth(formattedMonth); // month 상태 초기화
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  // 월 데이터가 변경될 때마다 호출
  const handleMonthChange = (monthData: Date) => {
    console.log('달 변경');
    const year = monthData.getFullYear();
    const month = (monthData.getMonth() + 1).toString().padStart(2, '0');
    const formattedMonthData = `${year}-${month}`;
    setMonth(formattedMonthData);
    //월 변경되면 출력된 예약 데이터도 초기화
    setReserve([]);
  };

  useEffect(() => {
    // 첫 렌더링 시 한 번만 호출
    if (month) {
      if (isAuthor) {
        console.log(month);
        fetchAuthorReserveMonth(month)
          .then(response => {
            setMonthReserve(response.data.monthReservationCheckList);
          })
          .catch(error => {
            console.log('예약 정보를 가져오는 데 오류 발생:', error);
          });
      } else if (user) {
        console.log(month);
        fetchReserveMonth(month)
          .then(response => {
            setMonthReserve(response.data.monthReservationCheckList);
          })
          .catch(error => {
            console.log('예약 정보를 가져오는 데 오류 발생:', error);
          });
      }
    }
  }, [month, isAuthor, user]); // month가 변경될 때마다 API 호출

  const [sortedReserve, setSortedReserve] = useState([]);

  useEffect(() => {
    if (isAuthor) {
      const sortedData = [...reserve].sort(
        (a, b) => a.startTime[3] - b.startTime[3],
      );
      setSortedReserve(sortedData);
    } else {
      const sortedData = [...reserve].sort((a, b) => {
        // 'YYYY-MM-DD HH:MM' 형식의 문자열을 Date 객체로 변환
        const timeA = new Date(a.startTime.replace(' ', 'T'));
        const timeB = new Date(b.startTime.replace(' ', 'T'));

        // 시간 비교
        return timeA - timeB;
      });
      setSortedReserve(sortedData); // 정렬된 데이터를 상태로 설정
    }
  }, [reserve, isAuthor]); // reserve 데이터가 변경될 때마다 정렬

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Container>
          <ContentsHeader text={'캘린더'} />
          <S.CalendarHeader>
            <Title text={'내 예약'} />
          </S.CalendarHeader>
          <Calendar
            onDateSelect={handleDateSelect}
            onMonthChange={handleMonthChange}
            monthReserve={monthReserve}
          />
          {isAuthor ? (
            <FlatList
              scrollEnabled={false}
              nestedScrollEnabled={true} // ScrollView 안에서 FlatList 동작 허용
              showsVerticalScrollIndicator={false}
              data={sortedReserve} // 배열 정렬
              keyExtractor={item => String(item.reservationId)}
              renderItem={({item}) => <ReserveAuthorBox item={item} />}
            />
          ) : user ? (
            <FlatList
              scrollEnabled={false}
              nestedScrollEnabled={true} // ScrollView 안에서 FlatList 동작 허용
              showsVerticalScrollIndicator={false}
              data={sortedReserve} // 배열 정렬
              keyExtractor={item => String(item.reservationId)}
              renderItem={({item}) => <ReserveUserBox item={item} />}
            />
          ) : (
            <S.CalendarContainer>
              <S.CalendarText>로그인이 필요합니다.</S.CalendarText>
            </S.CalendarContainer>
          )}
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

export default MyCalendar;
