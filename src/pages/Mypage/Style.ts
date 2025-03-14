import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

export const TopView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3%;
  margin-right: 10%;
`;
export const ReserveText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: #bebebe;
  justify-content: center;
  align-items: center;
`;

export const ReserveView = styled(View)`
  justify-content: center;
  align-items: center;
  margin: 20%;
`;
