import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const MyReserveContainer = styled(TouchableOpacity)``;

//너비와 높이를 %로 정하면 가져올 때 컴포넌트가 합쳐지는 현상 발생
export const MyReserveBox = styled(LinearGradient)`
  width: 271px;
  height: 180px;
  border-radius: 20px;
  margin: 10px;
`;

export const Shadow = styled(View)`
  position: absolute;
  border-radius: 20px;
  width: 271px;
  height: 180px;
  background-color: 'rgba(0, 0, 0, 0.3)';
  z-index: -1;
  top: 15px;
  left: 15px;
`;

export const DateText = styled(Text)`
  color: white;
  position: absolute;
  top: 45%;
  font-size: 20px;
  font-weight: bold;
  margin: 5%;
  left: 3%;
`;

export const NameText = styled(Text)`
  color: white;
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  top: 55%;
  left: 3%;
  margin: 5%;
`;
