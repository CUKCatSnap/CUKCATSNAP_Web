import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import * as S from './Style';

//캘린더 헤더
const days = ['일', '월', '화', '수', '목', '금', '토'];
//월 표기
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

const MyCalendar = props => {
  const [currentMonth, setCurrentMonth] = useState(new Date()); //현재 월
  const [selectDay, setSelectedDay] = useState(null); //선택한 날짜
  const [specificDates, setSpecificDates] = useState([]); //특정 날짜
  const [checkDate, setCheckDate] = useState(''); //선택한 날짜 포맷

  //api로 공휴일 데이터 가져오기
  const GetDate = async () => {
    try {
      const response = await axios.get('https://api.vworld.kr/req/data', {
        params: {
          service: 'data',
          request: 'GetFeature',
          data: 'LT_C_UO601',
          key: 'AB239635-E8FB-329E-9A56-107C5396838D',
          domain: 'https://api.vworld.kr',
          format: 'json',
          geomFilter: 'BOX(124.0, 33.0, 132.0, 39.0)',
        },
      });

      console.log('API Response:', response.data); // API 응답 출력

      // featureCollection에서 features 배열 가져오기
      const items =
        response.data?.response?.result?.featureCollection?.features || [];

      if (Array.isArray(items)) {
        const locdateArray = items.map(item => {
          return formatDate(item.properties.locdate); // locdate를 변환
        });
        setSpecificDates(locdateArray);
      } else {
        console.error('items is not an array', items);
      }
    } catch (error) {
      console.error('Error during API call', error);
    }
  };

  useEffect(() => {
    GetDate();
  }, []);

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
    var matrix = [];
    matrix[0] = days; //요일 헤더 초기화
    var year = currentMonth.getFullYear();
    var month = currentMonth.getMonth();
    var firstDay = new Date(year, month, 1).getDay();
    var maxDays = new Date(year, month + 1, 0).getDate();

    var counter = -firstDay + 1; //첫 주의 첫 날짜를 계산
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        let cellValue = counter > 0 && counter <= maxDays ? counter : '';
        matrix[row][col] = {
          day: cellValue,
          isInCurrentMonth: counter > 0 && counter <= maxDays,
        };
        counter++;
      }
    }
    return matrix;
  };

  const getTextStyle = (rowIndex, colIndex, item) => {
    if (rowIndex !== 0) {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth() + 1;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDay = item.day < 10 ? `0${item.day}` : item.day;
      const fullDate = `${year}-${formattedMonth}-${formattedDay}`;

      let textStyle = item.isInCurrentMonth
        ? colIndex === 0
          ? styles.cellTextRed
          : colIndex === 6
          ? styles.cellTextBlue
          : styles.cellText
        : colIndex === 0
        ? {...styles.cellTextRed, ...styles.cellTextGrayOpacity}
        : colIndex === 6
        ? {...styles.cellTextBlue, ...styles.cellTextGrayOpacity}
        : {...styles.cellTextGray, ...styles.cellTextGrayOpacity};

      if (item.isInCurrentMonth && specificDates.includes(fullDate)) {
        textStyle = {...textStyle, ...styles.specificDate};

        if (item.day === setSelectedDay && item.insInCurrentMonth) {
          textStyle = styles.selectedDay;
        }
        return textStyle;
      } else {
        return colIndex === 0
          ? styles.headerTextRed
          : colIndex === 6
          ? styles.headerTextBlue
          : styles.headerText;
      }
    }
  };

  const renderCalendar = () => {
    var matrix = generateMatrix();
    var rows = matrix.map((row, rowIndex) => {
      var rowItems = row.map((item, colIndex) => {
        const textStyle = getTextStyle(rowIndex, colIndex, item); //날짜 스타일 결정

        return (
          <TouchableOpacity
            style={styles.cell}
            key={colIndex}
            onPress={() => handleDayPress(item.day, item.isInCurrentMonth)}>
            <Text style={textStyle}>{item.day}</Text>
          </TouchableOpacity>
        );
      });
      return (
        <View style={styles.row} key={rowIndex}>
          {rowItems}
        </View>
      );
    });
    return <View style={styles.calendar}>{rows}</View>;
  };

  const handleDayPress = (day, isInCurrentMonth) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    if (!isInCurrentMonth) {
      const isNextMonth = day < 15;
      const newMonth = isNextMonth ? month + 1 : month - 1;
      const newYear = newMonth < 0 ? year - 1 : newMonth > 11 ? year + 1 : year;
      const adjustedMonth = (newMonth + 12) % 12;

      const newCurrentMonth = new Date(newYear, adjustedMonth, 1);
      setCurrentMonth(newCurrentMonth);

      const formattedMonth =
        adjustedMonth < 9 ? `0${adjustedMonth + 1}` : adjustedMonth + 1;
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedDate = `${newYear}-${formattedMonth}-${formattedDay}`;

      setSelectedDay(day);
      setCheckDate(formattedDate);
    } else {
      const formattedMonth = month < 9 ? `0${month + 1}` : month + 1;
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedDate = `${year}-${formattedMonth}- ${formattedDay}`;
      setSelectedDay(day);
      setCheckDate(formattedDate);
    }
  };

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goToPreviousMonth}>
            <Text style={styles.monthLable}>&lt; Prev</Text>
          </TouchableOpacity>
          <Text style={styles.monthLable}>
            {currentMonth.getFullYear()}.&nbsp;
            {months[currentMonth.getMonth()]}
          </Text>
          <TouchableOpacity onPress={goToNextMonth}>
            <Text style={styles.monthLable}>Next &gt;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>{renderCalendar()}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0,0,0,0,3)',
    position: 'absolute',
    height: '100%',
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    padding: 20,
    paddingBottom: 10,
  },
  calendar: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    height: 280,
    justifyContent: 'space-between',
  },
  monthLable: {
    fontSize: 18,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
  },
  headerTextRed: {
    color: '#FF0000',
  },
  headerTextBlue: {
    color: '#007BA4',
  },
  cellText: {
    color: '#000',
  },
  cellTextRed: {
    color: '#FF0000',
  },
  cellTextBlue: {
    color: '#007BA4',
  },
  cellTextGray: {
    color: '#0000004D',
  },
  selectedDay: {
    backgroundColor: '#E6EEF5',
    textAlign: 'center',
    lineHeight: 40,
    color: '#000',
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cellTextGrayOpacity: {
    opacity: 0.3,
  },
  specificDate: {
    color: 'red',
  },
});

export default MyCalendar;
