import styled from 'styled-components/native';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export const ContainerText = styled(Text)`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;
export const BoxText = styled(Text)`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;
export const ContentText = styled(Text)`
  color: black;
  font-size: 18px;
`;
export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerBox = styled(View)`
  margin: 10% 0%;
`;
