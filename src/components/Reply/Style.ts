import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

export const ReplyPageContainer = styled(View)`
  margin: 3% 5%;
`;

export const PostContainer = styled(View)``;

export const PostBox = styled(View)`
  align-items: center;
  flex-direction: row;
  gap: 5px;
  margin: 0px;
  padding: 0px;
`;

export const Nickname = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 16px;
`;
export const Score = styled(Text)`
  color: #a1a1a1;
  font-size: 16px;
`;
export const Date = styled(Text)`
  color: black;
  font-weight: bold;
  margin: 0 15%;
  font-size: 16px;
`;
export const Time = styled(Text)`
  color: #747272;
  padding-left: 15%;
`;

export const PostText = styled(Text)`
  color: black;
  margin-bottom: 3%;
  margin-left: 15%;
  font-size: 16px;
  margin-right: 5%;
`;

export const Profile = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: black;
  margin: 5px;
`;

export const ReplyAgain = styled(Text)`
  left: 10%;
`;

export const Box = styled(View)`
  flex-direction: row;
`;

export const ReplyPress = styled(TouchableOpacity)`
  color: #747272;
  font-size: 16px;
`;
export const Heart = styled(View)``;

export const HeartCount = styled(Text)`
  font-size: 16px;
  padding-top: 2px;
`;
