import styled from 'styled-components/native';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Svg from 'react-native-svg';

export const LoginContainer = styled(View)`
  margin: auto 7%;
  margin-top: 1%;
`;

export const LoginText = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 14px;
  margin: 3%;
`;

export const LoginInputBox = styled(TextInput)`
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 15px;
`;

export const LoginNewContent = styled(TouchableOpacity)`
  margin-top: 10px;
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #bebebe;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const LoginNewText = styled(Text)`
  font-weight: bold;
  color: #bebebe;
`;

export const LoginNewBox = styled(View)`
  margin-top: 10px;
`;
