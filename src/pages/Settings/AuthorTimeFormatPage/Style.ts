import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const TimeView = styled(View)`
  flex-direction: row;
`;

export const TimeViewBox = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

export const TimeText = styled(Text)`
  color: rgb(167, 167, 167);
  font-size: 25px;
  font-weight: bold;
`;

export const TimeTextView = styled(View)`
  justify-content: center;
  align-items: center;
  margin: 10%;
`;

export const TimeBtnView = styled(View)`
  margin: 0% 5%;
`;

export const BtnView = styled(View)`
  margin: 3% 0%;
`;
