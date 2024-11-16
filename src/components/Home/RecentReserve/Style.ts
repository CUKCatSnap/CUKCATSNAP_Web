import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {Svg} from 'react-native-svg';

export const RecentReserve = styled(TouchableOpacity)`
  position: relative;
`;

//너비와 높이를 %로 정하면 가져올 때 컴포넌트가 합쳐지는 현상 발생
export const RecentReserveContainer = styled(View)`
  width: 252px;
  height: 159px;
  border-radius: 20px;
  margin-left: 20px;
  margin-bottom: 5px;
  background-color: black;
  margin: 10px;
  z-index: 10;
`;

export const RecentReserveBox = styled(View)`
  align-items: center;
  flex-direction: row;
`;

export const Shadow = styled(View)`
  position: absolute;
  border-radius: 20px;
  width: 252px;
  height: 159px;

  background-color: 'rgba(0, 0, 0, 0.3)';
  z-index: -1;
  top: 15px;
  left: 15px;
`;
export const PosBox = styled(View)`
  color: gray;
  margin-left: 20px;
`;

export const Point = styled(Svg)`
  width: 10%;
`;

export const PosText = styled(Text)`
  color: gray;
  font-size: 10px;
  margin-left: 50px;
  z-index: 10;
  position: absolute;
  top: 10%;
  left: 50%;
`;

export const NameText = styled(Text)`
  font-size: 27px;
  font-weight: bold;
  color: black;
  left: 5%;
`;

export const Score = styled(Text)`
  color: gray;
  font-size: 20px;
  left: 10%;
`;
