import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
  padding: 0% 5%;
`;

export const TimeViewBox = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1% 0%;
  width: 100%;
`;

export const TimeView = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

export const BoxText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding: 0% 5%;
  padding-bottom: 2%;
  width: 100%;
`;

export const TimeBtn = styled(View)`
  align-items: center;
  margin-left: 3%;
`;

export const Line = styled(View)`
  width: 100%;
  align-items: center;
  height: 2px;
  margin: 5% 0%;
  background-color: rgb(209, 219, 231);
`;

export const LineBox = styled(View)`
  flex: 1;
`;

export const RoundBox = styled(View)`
  border: 1px;
  border-radius: 10px;
  border-color: rgb(209, 219, 231);
  padding: 5%;
  margin: 3% 0%;
`;
