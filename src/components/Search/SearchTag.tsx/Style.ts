import styled from 'styled-components';
import {View, Pressable, Text} from 'react-native';
// isActive props 타입 정의
interface TabProps {
  isActive: boolean;
}

export const SearchTabContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin: 5% 1%;
`;

export const SearchTab = styled(Pressable)`
  align-items: center;
  width: 50%;
`;

export const SearchTabText = styled(Text)`
  color: #bebebe;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const SearchTabBox = styled(View)<TabProps>`
  width: 100%;
  height: 3px;
  background-color: ${props => (props.isActive ? '#423CD2' : '#BEBEBE')};
`;

export const SearchListContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 50%;
`;

export const SearchListContainerReview = styled(View)`
  margin: 0%;
`;
