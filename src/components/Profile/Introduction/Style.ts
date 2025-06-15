import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity, Image} from 'react-native';

export const ProfilePostBox = styled(View)``;

export const AuthorFeedImage = styled(Image)`
  width: 100%;
  height: 213px;
  background-color: black;
  border-radius: 15px;
`;
export const AuthorFeedProfile = styled(Text)`
  color: black;
  margin: 1% 0;
  font-size: 12px;
`;

export const ReserveText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #bebebe;
`;
export const BoxView = styled(View)`
  height: 100px;
  justify-content: center;
  align-items: center;
`;
