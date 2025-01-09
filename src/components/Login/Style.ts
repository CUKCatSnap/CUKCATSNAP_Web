import styled from 'styled-components';
import {TouchableOpacity, View, Text} from 'react-native';

export const LoginBtnContainer = styled(TouchableOpacity)`
  width: 100%;
  background-color: #423cd2;
  border-radius: 15px;
  padding: 20px;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const BtnText = styled(Text)`
  color: white;
  font-size: 18px;
`;
