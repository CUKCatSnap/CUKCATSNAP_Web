import styled, {css} from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const MyCalendar = styled(View)`
  flex: 1;
`;

export const CalendarContainer = styled(View)`
  background-color: '#ffffff';
  justify-content: center;
`;

export const CalendarHeader = styled(View)`
  flex-direction: row;
  margin: 0 5%;
`;

export const CalendarText = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin: 3% 7%;
`;

export const MonthText = styled(Text)`
  font-size: 17px;
  font-weight: bold;
  margin: 5% 5%;
  color: black;
`;

export const Calendar = styled(View)`
  margin: 0 5%;
`;

export const Row = styled(View)`
  flex-direction: row;
`;
export const RowText = styled(Text)`
  color: black;
`;
export const DateText = styled(Text)`
  font-size: 25px;

  color: #bebebe;
`;
export const DateView = styled(View)`
  align-items: left;
  margin: 3% 7%;
`;
export const Cell = styled(TouchableOpacity)`
  width: 14.28%;
  aspect-ratio: 1;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const CellBackground = styled(View)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({isReserved}) =>
    isReserved ? 'rgb(229, 225, 252)' : 'transparent'};
  border-radius: ${({isReserved}) => (isReserved ? '10px' : '0px')};
`;

export const CellText = styled.Text<{
  colIndex: number;
  rowIndex: number;
  isInCurrentMonth: boolean;
  selectedDay: number | null;
  todayDay: number | null;
  itemDay: number | null;
  isHoliday: boolean; // 공휴일 여부를 위한 prop 추가
}>`
  color: #000;
  font-size: 17px;
  font-weight: bold;

  ${({colIndex}) =>
    colIndex === 0 &&
    css`
      color: #ff0000; /* 일요일 빨간색 */
    `}

  ${({colIndex}) =>
    colIndex === 6 &&
    css`
      color: #007ba4; /* 토요일 파란색 */
    `}

  ${({isInCurrentMonth}) =>
    !isInCurrentMonth &&
    css`
      color: #d3d3d3; /* 현재 달이 아닌 날짜 회색 */
    `}

  ${({selectedDay, isInCurrentMonth, itemDay}) =>
    selectedDay === itemDay &&
    isInCurrentMonth &&
    css`
      background-color: #e6eef5; /* 선택된 날짜 배경색 */
      border-radius: 10px;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #000;
    `}

  ${({todayDay, isInCurrentMonth, itemDay}) =>
    todayDay === itemDay &&
    isInCurrentMonth &&
    css`
      background-color: #3e23b9; /* 오늘 날짜 배경색 */
      border-radius: 10px;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #fff; /* 보라색 배경에 흰색 텍스트 */
    `}

  ${({rowIndex}) =>
    rowIndex === 0 &&
    css`
      font-size: 15px;
      font-weight: bold;
      color: #555; /* 요일 헤더 스타일 */
    `}

    ${({isHoliday}) =>
    isHoliday &&
    css`
      color: red; /* 공휴일 텍스트 색 빨간색 */
    `}
`;
