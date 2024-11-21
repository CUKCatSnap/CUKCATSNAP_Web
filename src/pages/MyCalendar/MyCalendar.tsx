//캘린더 페이지 입니다.
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';

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
                onPress={() => handleDayPress(item.day, item.isInCurrentMonth)}>
                <Text
                  style={[
                    styles.cellText,
                    colIndex === 0 && styles.cellTextRed,
                    colIndex === 6 && styles.cellTextBlue,
                    !item.isInCurrentMonth && styles.cellTextGray,
                    selectedDay === item.day &&
                      item.isInCurrentMonth &&
                      styles.selectedDay,
                  ]}>
                  {item.day}
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
      <ContentsHeader text={'캘린더'} />
      <S.CalendarContainer>
        <S.CalendarHeader>
          <TouchableOpacity onPress={goToPreviousMonth}>
            <S.MonthText>&lt;</S.MonthText>
          </TouchableOpacity>
          <S.Header>
            <S.MonthText>
              {currentMonth.getFullYear()}. {months[currentMonth.getMonth()]}
            </S.MonthText>
          </S.Header>
          <TouchableOpacity onPress={goToNextMonth}>
            <S.MonthText>&gt;</S.MonthText>
          </TouchableOpacity>
        </S.CalendarHeader>
        {renderCalendar()}
      </S.CalendarContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },

  cell: {
    flex: 1,
    height: 90,
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
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
    color: '#000',
  },
});

export default MyCalendar;
