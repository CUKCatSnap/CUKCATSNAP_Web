import styled from 'styled-components/native';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import TextInputMask from 'react-native-text-input-mask';

interface LoginTextProps {
  isError: boolean;
}

export const LoginContainer = styled(View)`
  margin: auto 7%;
  margin-top: 1%;
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

export const LoginInputBoxForBirthDay = styled(TextInputMask)`
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 15px;
`;

export const LoginInputBoxForPhone = styled(TextInputMask)`
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

export const IconBox = styled(View)``;

export const IconCheck = styled(View)`
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 90%;
  top: 40%;
`;
