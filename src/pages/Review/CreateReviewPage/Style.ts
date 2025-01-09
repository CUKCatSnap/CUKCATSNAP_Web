import styled from 'styled-components';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

export const ImageReview = styled(Image)`
  width: 150px;
  height: 150px;
`;
export const ImageBox = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TitleText = styled(Text)`
  font-size: 14px;
  color: black;
  font-weight: bold;
`;
export const TextInputBox = styled(TextInput)`
  border-radius: 15px;
  background-color: #f3f3f3;
  margin: 3% 0%;
  padding: 20px 20px;
  font-size: 14px;
`;
export const Container = styled(View)`
  margin: 5%;
`;
export const BtnBox = styled(View)`
  margin: 3%;
`;
