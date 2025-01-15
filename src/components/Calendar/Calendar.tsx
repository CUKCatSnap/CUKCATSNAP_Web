import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as S from './Style';
import GestureRecognizer from 'react-native-swipe-gestures';
import {fetchHoliday} from '../../apis/Calendar/getHoliday';

const days = ['일', '월', '화', '수', '목', '금', '토'];
const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

const Calendar = ({onDateSelect, onMonthChange, monthReserve}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [checkDate, setCheckDate] = useState('');
  const [todayDay, setTodayDay] = useState(null);
  const [holiday, setHoliday] = useState([]);

  //공휴일 정보 가져오기
  const handleHoliday = async (month: string) => {
    try {
      const response = await fetchHoliday(month);
      setHoliday(response.data.holidayList);
    } catch (error) {
      console.log(
        '휴일 가져오기 실패:',
        error.message || '알 수 없는 오류 발생',
      );
    }
  };

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    setTodayDay(day); // 오늘 날짜 저장
    const year = today.getFullYear();
    const month = today.getMonth();
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    setCheckDate(`${year}-${formattedMonth}-${formattedDay}`);
    // 아무것도 선택되지 않았을 때 checkDate는 빈 문자열로 설정
    setCheckDate('');

    // 현재 월로 돌아오면 오늘 날짜 체크
    if (month === currentMonth.getMonth()) {
      setTodayDay(day); // 오늘 날짜 저장
    } else {
      setTodayDay(null); // 다른 달로 넘어가면 오늘 날짜를 초기화
    }
  }, [currentMonth]);

  useEffect(() => {
    const yearMonth = currentMonth
      .toISOString()
      .split('-')
      .slice(0, 2)
      .join('-');
    handleHoliday(yearMonth);
  }, []); // 빈 배열로 설정해 최초 로딩 시 한 번만 실행

  const goToNextMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1,
    );
    setCurrentMonth(newMonth);
    setSelectedDay(''); // 날짜 초기화

    const yearMonth = newMonth.toISOString().split('-').slice(0, 2).join('-');
    handleHoliday(yearMonth);

    if (onMonthChange) {
      onMonthChange(newMonth); // 부모 컴포넌트에 새로운 월을 전달
    }
  };

  const goToPreviousMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1,
    );

    setCurrentMonth(newMonth);
    setSelectedDay(''); // 날짜 초기화

    const yearMonth = newMonth.toISOString().split('-').slice(0, 2).join('-');
    handleHoliday(yearMonth);

    if (onMonthChange) {
      onMonthChange(newMonth); // 부모 컴포넌트에 새로운 월을 전달
    }
  };
  const generateMatrix = () => {
    const matrix = [days];
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 해당 월의 첫날 요일
    const maxDays = new Date(year, month + 1, 0).getDate(); // 해당 월의 마지막 날
    let counter = -firstDay + 1; // 첫 번째 주 시작 숫자

    for (let row = 1; counter <= maxDays; row++) {
      matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        matrix[row][col] = {
          day: counter > 0 && counter <= maxDays ? counter : '',
          isInCurrentMonth: counter > 0 && counter <= maxDays,
          isReserved: false, // 기본값 false로 설정
          isHoliday: false, // 공휴일 여부 추가
        };

        // 해당 날짜가 holiday에 있는지 확인
        const formattedDate = `${year}-${(month + 1)
          .toString()
          .padStart(2, '0')}-${counter.toString().padStart(2, '0')}`;
        const isHoliday = holiday.some(
          holidayItem => holidayItem.holidayDate === formattedDate,
        );

        if (isHoliday) {
          matrix[row][col].isHoliday = true; // 공휴일이면 true로 설정
        }

        // 예약된 날짜인지 확인
        const reservation = Array.isArray(monthReserve)
          ? monthReserve.find(item => item.reservationDate === formattedDate)
          : null;

        if (reservation) {
          matrix[row][col].isReserved = true; // 예약된 날짜는 true로 설정
        }

        counter++;
      }
    }
    return matrix;
  };

  const handleDayPress = (day: string, isInCurrentMonth) => {
    if (!isInCurrentMonth) {
      return;
    }

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth() + 1;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

    setSelectedDay(day);
    setCheckDate(formattedDate);
    if (onDateSelect) {
      onDateSelect(formattedDate);
    }
  };

  const renderCalendar = () => {
    const matrix = generateMatrix();
    return (
      <S.Calendar>
        {matrix.map((row, rowIndex) => (
          <S.Row key={rowIndex}>
            {row.map((item, colIndex) => (
              <S.Cell
                key={colIndex}
                onPress={() =>
                  rowIndex > 0 &&
                  handleDayPress(item.day, item.isInCurrentMonth)
                }
                isReserved={item.isReserved} // isReserved를 전달
              >
                <S.CellBackground isReserved={item.isReserved}>
                  <S.CellText
                    colIndex={colIndex}
                    rowIndex={rowIndex}
                    isInCurrentMonth={item.isInCurrentMonth}
                    selectedDay={selectedDay}
                    todayDay={todayDay}
                    isHoliday={item.isHoliday}
                    itemDay={item.day}>
                    {rowIndex === 0 ? item : item.day}
                  </S.CellText>
                </S.CellBackground>
              </S.Cell>
            ))}
          </S.Row>
        ))}
      </S.Calendar>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <GestureRecognizer
        onSwipeLeft={goToNextMonth}
        onSwipeRight={goToPreviousMonth}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.MyCalendar>
            <S.CalendarHeader>
              <S.MonthText>
                {currentMonth.getFullYear()}년 {months[currentMonth.getMonth()]}
                월
              </S.MonthText>
            </S.CalendarHeader>
            <S.CalendarContainer>{renderCalendar()}</S.CalendarContainer>
            {checkDate ? (
              <S.CalendarText>
                {checkDate.split('-')[0]}년 {checkDate.split('-')[1]}월{' '}
                {checkDate.split('-')[2]}일
              </S.CalendarText>
            ) : (
              <S.DateView>
                <S.DateText>날짜를 선택해 주세요.</S.DateText>
              </S.DateView>
            )}
          </S.MyCalendar>
        </ScrollView>
      </GestureRecognizer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Calendar;
