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

export const Container = styled(View)``;
export const DayText = styled(Text)`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

export const Contents = styled(View)`
  border-color: '#503bc7';
  border-radius: 10px;
  border: 3px;
  padding: 0px 10px;
  margin: 3px 3px;
  align-items: center;
  justify-content: center;
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
export const TimeBox = styled(View)`
  justify-content: space-evenly;
`;

export const Btn = styled(View)`
  margin: 0% 5%;
`;
export const ContentsBtn = styled(View)`
  margin: 2% 0%;
`;
