import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const CalendarContainer = styled(View)`
  background-color: '#ffffff';
  justify-content: center;
`;

export const CalendarHeader = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Header = styled(View)``;

export const MonthText = styled(Text)`
  font-size: 20px;
  color: black;
`;

export const Calendar = styled(View)`
  margin: 0 5%;
  top: -15%;
`;

export const Row = styled(View)`
  flex-direction: row;
`;
export const RowText = styled(Text)`
  color: black;
`;
