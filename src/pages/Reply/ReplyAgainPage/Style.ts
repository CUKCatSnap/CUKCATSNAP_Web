import styled from 'styled-components/native';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export const ReplyInputBox = styled(View)`
  background-color: transparent;
`;

export const ReplyInput = styled(TextInput)`
  position: fixed;

  font-size: 16px;
  padding-left: 70px;
  padding-top: 20px;
  background-color: #f3f3f3;

  color: black;

  height: 150px;
  margin: 0;
  z-index: 5;
`;
export const ProfileReply = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: black;
  bottom: 0;
  top: 10%;
  left: 10px;
  z-index: 10;
  position: absolute;
`;

export const SvgBox = styled(TouchableOpacity)`
  bottom: 0;
  top: 20%;
  right: 30px;
  z-index: 10;
  position: absolute;
`;

export const PostText = styled(Text)`
  color: black;
  margin: 0 15%;
  font-size: 16px;
  margin-right: 5%;
`;

export const ReplyContainer = styled(View)``;

export const Line = styled(View)`
  height: 3px;
  background-color: #bebebe;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
`;

export const ReplyList = styled(View)`
  margin-left: 10%;
`;
export const ReplyPackage = styled(View)``;
