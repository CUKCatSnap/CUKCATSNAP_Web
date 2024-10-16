import styled from 'styled-components/native';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';

export const ContextHeaderContainer = styled(View)`
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 60%;
  margin: 7%;
  padding: 10px;
`;

export const HeaderText = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
`;

export const BackArrow = styled(TouchableOpacity)``;
