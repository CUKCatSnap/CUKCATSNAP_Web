//캘린더 페이지 입니다.
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
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import GestureRecognizer from 'react-native-swipe-gestures';
import Title from '../../components/Home/Title/Title';

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

const MyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [checkDate, setCheckDate] = useState('');

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const generateMatrix = () => {
    const matrix = [days];
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const maxDays = new Date(year, month + 1, 0).getDate();
    let counter = -firstDay + 1;

    for (let row = 1; row < 7; row++) {
      matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        matrix[row][col] = {
          day: counter > 0 && counter <= maxDays ? counter : '',
          isInCurrentMonth: counter > 0 && counter <= maxDays,
        };
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
  };

  const renderCalendar = () => {
    const matrix = generateMatrix();
    return (
      <S.Calendar>
        {matrix.map((row, rowIndex) => (
          <S.Row key={rowIndex}>
            {row.map((item, colIndex) => (
              <TouchableOpacity
                style={styles.cell}
                key={colIndex}
                onPress={() =>
                  rowIndex > 0 &&
                  handleDayPress(item.day, item.isInCurrentMonth)
                }>
                <Text
                  style={[
                    styles.cellText,
                    colIndex === 0 && styles.cellTextRed, // 일요일
                    colIndex === 6 && styles.cellTextBlue, // 토요일
                    !item.isInCurrentMonth && styles.cellTextGray, // 현재 월 외 날짜
                    selectedDay === item.day &&
                      item.isInCurrentMonth &&
                      styles.selectedDay, // 선택된 날짜
                    rowIndex === 0 && styles.dayHeader, // 요일 스타일
                  ]}>
                  {rowIndex === 0 ? item : item.day}
                </Text>
              </TouchableOpacity>
            ))}
          </S.Row>
        ))}
      </S.Calendar>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <GestureRecognizer
        onSwipeLeft={goToNextMonth} // 스와이프 왼쪽
        onSwipeRight={goToPreviousMonth} // 스와이프 오른쪽
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.MyCalendar>
            <ContentsHeader text={'캘린더'} />
            <S.CalendarHeader>
              <Title text={'내 예약'} />
            </S.CalendarHeader>
            <S.CalendarHeader>
              <S.MonthText>
                {currentMonth.getFullYear()}년 {months[currentMonth.getMonth()]}
                월
              </S.MonthText>
            </S.CalendarHeader>
            <S.CalendarContainer>{renderCalendar()}</S.CalendarContainer>
            {checkDate && (
              <S.CalendarText>
                {checkDate.split('-')[0]}년 {checkDate.split('-')[1]}월{' '}
                {checkDate.split('-')[2]}일
              </S.CalendarText>
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

  cell: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cellTextRed: {
    color: '#FF0000',
  },
  cellTextBlue: {
    color: '#007BA4',
  },
  cellTextGray: {
    color: '#D3D3D3',
  },
  selectedDay: {
    backgroundColor: '#E6EEF5',
    borderRadius: 10,
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
    color: '#000',
  },
  dayHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default MyCalendar;
