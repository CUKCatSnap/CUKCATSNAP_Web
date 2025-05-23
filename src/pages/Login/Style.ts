import styled from 'styled-components/native';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

interface LoginTextProps {
  isError: boolean;
}

export const LoginContainer = styled(View)`
  margin: auto 7%;
  margin-top: 1%;
`;

export const LoginBtnBox = styled(View)`
  flex-direction: row;
  gap: 10px;
`;

export const LoginBtn = styled(View)`
  justify-content: space-evenly;
  flex: 1;
  margin-top: 3%;
`;

export const LoginText = styled.Text<LoginTextProps>`
  color: ${props => (props.isError ? 'red' : 'black')};
  font-weight: bold;
  font-size: 14px;
  margin: 2% 2%;
`;

export const LoginInputBox = styled(TextInput)`
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 15px;
`;

export const LoginCenterBar = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2%;
`;

export const LoginUnderbar = styled(View)`
  background-color: #bebebe;
  height: 1px;
  width: 45%;
`;

export const LoginText2 = styled(Text)`
  color: #bebebe;
  font-weight: bold;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
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
  margin-bottom: 10px;
`;

export const NaverIcon = styled(View)`
  margin: auto 10px;
`;

export const LoginWithNaverText = styled(Text)`
  font-weight: bold;
`;
export const LoginNewBox = styled(View)`
  justify-content: space-evenly;
  flex-direction: row;
  gap: 10px;
`;
export const LoginNew = styled(TouchableOpacity)`
  width: 100%;
  flex: 1;
  background-color: #423cd2;
  border-radius: 15px;
  padding: 20px;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const LoginNewText = styled(Text)`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
`;
