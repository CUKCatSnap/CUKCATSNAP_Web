import styled from 'styled-components/native';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';

export const PostComponent = styled(View)`
  padding: 3%;
`;

export const PostImageBox = styled(View)`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: rgb(223, 223, 223);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const PostTextBox = styled(View)`
  background-color: #fefefe;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const IconBox = styled(View)`
  max-width: 100%;
  flex-direction: row;
  gap: 15px;
  padding: 10px 10px;
  padding-bottom: 0px;
  align-items: center;
  justify-content: space-between;
`;

export const IconPress = styled(TouchableOpacity)``;

export const IconSize = styled(Pressable)`
  flex-direction: row;
  gap: 15px;
  padding: 0px 5px;
`;

export const Title = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 25px;
  padding: 5px 10px;
`;

export const ProfileBox = styled(View)`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 5px 10px;
`;
export const ProfileBox2 = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const ProfileEmpty = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: gray;
`;

export const Profile = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: gray;
`;

export const Name = styled(Text)`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

export const Score = styled(Text)`
  color: #a1a1a1;
`;

export const Contents = styled(View)`
  padding: 5px 10px;
`;

export const Date = styled(Text)`
  color: #a1a1a1;
  font-size: 13px;
  margin-bottom: 10px;
`;
export const TextContents = styled(Text)`
  color: black;
  font-size: 13px;
`;

export const Love = styled(Text)`
  padding: 10px 10px;
`;
