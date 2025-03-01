import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const Container = styled(View)``;

export const ContainerBox = styled(View)`
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

export const PENDING = styled(View)`
  background-color: rgb(225, 224, 236);
  border-radius: 15px;
  justify-content: center;
  height: 30px;
  padding: 0 10px;
`;

export const APPROVED = styled(View)`
  background-color: rgb(188, 187, 233);
  border-radius: 15px;
  justify-content: center;
  height: 30px;
  padding: 0 10px;
`;

export const REJECTED = styled(View)`
  background-color: rgb(250, 135, 114);
  border-radius: 15px;
  justify-content: center;
  height: 30px;
  padding: 0 10px;
`;

export const MEMBER_CANCELLED = styled(View)`
  background-color: rgb(211, 211, 211);
  border-radius: 15px;
  justify-content: center;
  height: 30px;
  padding: 0 10px;
`;

export const PHOTOGRAPHY_CANCELLED = styled(View)`
  background-color: rgb(188, 187, 233);
  border-radius: 15px;
  justify-content: center;
  height: 30px;
  padding: 0 10px;
`;

export const StateText = styled(Text)`
  color: black;
  font-size: 15px;
`;
