import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

export const ReserveContainer = styled(TouchableOpacity)`
  background-color: rgb(236, 236, 236);
  margin: 2% 5%;
  border-radius: 15px;
  padding: 5%;
`;
export const ReserveTitleText = styled(Text)`
  font-size: 25px;
  color: black;
  font-weight: bold;
`;
export const ReserveText = styled(Text)`
  font-size: 15px;
  color: black;
`;
