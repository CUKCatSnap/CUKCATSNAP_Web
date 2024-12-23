import styled from 'styled-components';
import {TouchableOpacity, View, Text} from 'react-native';

export const CalendarBtnContainer = styled(TouchableOpacity)`
  width: 100%;
  background-color: rgb(226, 226, 226);
  border-radius: 15px;
  padding: 20px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const BtnText = styled(Text)`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;
