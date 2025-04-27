import styled from 'styled-components/native';
import {View, Text, Pressable} from 'react-native';

// isActive props 타입 정의
interface TabProps {
  isActive: boolean;
}

export const SubscribeContainer = styled(View)`
  margin: 7%;
  justify-content: center;
`;

//2열 정렬 및 간격 일정하게
export const SubscribeBox = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 45%;
`;
export const SearchTabContainer = styled(View)`
  flex-direction: row;
  gap: 10px;
  margin: 0% 8%;
`;
export const SearchTab = styled(Pressable)``;

export const SearchTabText = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const SearchTabBox = styled(View)<TabProps>`
  width: 100%;
  height: 3px;
  background-color: ${props => (props.isActive ? '#423CD2' : '#BEBEBE')};
`;

export const Sub = styled(View)`
  flex-direction: row;
`;
