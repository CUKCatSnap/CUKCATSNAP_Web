import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const TimeViewBox = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0% 5%;
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
  width: 100%;
`;

export const TimeBtn = styled(View)`
  align-items: center;
`;

export const Line = styled(View)`
  width: 90%;
  align-items: center;
  height: 2px;
  margin: 5%;
  background-color: rgb(209, 219, 231);
`;

export const LineBox = styled(View)`
  flex: 1;
`;
