import styled from 'styled-components/native';
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
