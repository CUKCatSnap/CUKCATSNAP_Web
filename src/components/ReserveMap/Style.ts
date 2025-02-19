import styled from 'styled-components/native';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export const Container = styled(View)`
  flex-wrap: Wrap;
`;
export const TimeView = styled(View)`
  margin: 3% 5%;
`;
export const TimeScrollView = styled(ScrollView)`
  margin: 10% 2%;
`;
export const TimeText = styled(Text)`
  font-size: 25px;
  color: #bebebe;
  width: 100%;
`;

export const PosText = styled(Text)`
  font-size: 14px;
  color: black;
  margin: 5%;
`;
export const PosView = styled(View)`
  margin: 5%;
`;

export const Box = styled(View)`
  flex: 1;
`;

export const MapView = styled(View)`
  margin: 5% 0%;
  /*외부 컴포넌트의 borderRadius를 적용하려면 overFlow를 설정해주자*/
  border-radius: 20px;
  overflow: hidden;
`;

export const LocationText = styled(Text)`
  font-size: 20px;
  color: black;
  margin-bottom: 5%;
`;
