import styled from 'styled-components/native';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export const DayBox = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 7%;
`;

export const Container = styled(View)`
  width: 100%;
`;

export const DayText = styled(Text)`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;
export const TimeBox = styled(View)`
  justify-content: space-evenly;
  width: 45%;
  margin: 0% 5%;
`;
export const ContentsView = styled(View)`
  justify-content: center;
`;

export const ContentBox = styled(View)`
  border-radius: 10px;
  border: 1px solid #b1b1b1;
  padding: 3% 5%;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

export const NoneText = styled(Text)`
  color: #b1b1b1;
  margin: 10px;
  font-size: 14px;
`;

export const Btn = styled(View)`
  margin: 0% 5%;
`;
export const ContentsBtn = styled(View)`
  margin: 2% 0%;
`;
