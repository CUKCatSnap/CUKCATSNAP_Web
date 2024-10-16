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

export const LoginUnderbar = styled(View)`
  background-color: #bebebe;
  height: 1px;
  width: 200%;
  margin: 10px;
`;

export const LoginText2 = styled(Text)`
  color: #bebebe;
  font-weight: bold;
  font-size: 14px;
`;

export const LoginCenterBar = styled(ScrollView)`
  margin: 10px;
`;

export const LoginWithNaverContent = styled(TouchableOpacity)`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 20px;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const NaverIcon = styled(View)`
  margin: auto 10px;
`;

export const LoginWithNaverText = styled(Text)`
  font-weight: bold;
`;

export const LoginNew = styled(TouchableOpacity)`
  width: 100%;
  background-color: transparent;
  border-radius: 15px;
  padding: 20px;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const LoginNewText = styled(Text)`
  color: #423cd2;
  font-size: 14px;
  font-weight: bold;
`;
