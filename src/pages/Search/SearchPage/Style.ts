import styled from 'styled-components';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

// isActive props 타입 정의
interface TabProps {
  isActive: boolean;
}

export const SearchContainer = styled(View)`
  margin: 5%;
`;

export const SearchLankingContainer = styled(View)`
  margin: 10px 30px;
  width: 100%;
  height: 100%;
`;

export const SearchListContainer = styled(View)``;

export const SearchTabContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin: 1% 5%;
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

export const SearchSort = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin: 2% 5%;
`;
export const SearchSortText = styled(Text)`
  color: black;
  font-size: 14px;
`;

export const SearchSortIcon = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #f8f7f7;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

export const HotPlace = styled(Text)`
  font-weight: bold;
  font-size: 25px;
  color: black;
  margin-bottom: 10px;
`;

export const LankBox = styled(View)`
  flex-direction: row;
  margin: 5px;
  gap: 10px;
  align-items: center;
`;

export const LankNumber = styled(Text)`
  font-weight: bold;
  font-size: 25px;
  color: #423cda;
`;

export const Lank = styled(Text)`
  font-size: 20px;
  color: black;
`;

export const SearchUnderBar = styled(View)`
  width: 90%;
  height: 2px;
  background-color: #bebebe;
`;

export const SearchRecent = styled(View)`
  flex-direction: row;
`;

export const SearchRecentText = styled(Text)`
  font-size: 20px;
  margin: 10px;
  color: black;
`;
