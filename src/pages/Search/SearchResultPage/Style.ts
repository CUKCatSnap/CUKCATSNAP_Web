import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

// isActive props 타입 정의
interface TabProps {
  isActive: boolean;
}

export const SearchContainer = styled(View)`
  margin: -7% 5%;
`;

export const SearchLankingContainer = styled(View)`
  margin: 10px 30px;
  width: 100%;
  height: 100%;
`;

export const SearchListContainer = styled(View)`
  width: 100%;
`;

export const SearchTabContainer = styled(View)`
  flex-direction: row;
  justify-content: left;
  margin: 1% 5%;
  gap: 10px;
`;

export const SearchTab = styled(Pressable)``;

export const SearchTabText = styled(Text)`
  color: black;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const SearchTabBox = styled(View)<TabProps>`
  width: 100%;
  height: 3px;
  background-color: ${props => (props.isActive ? '#423CD2' : '#BEBEBE')};
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
  margin-top: 10px;
  background-color: #bebebe;
`;

export const SearchRecent = styled(View)`
  flex: 1;
`;

export const SearchRecentText = styled(Text)`
  font-size: 20px;
  margin: 10px;
  color: black;
`;

export const SearchListAuthorBox = styled(View)`
  margin: 3%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 40%;
`;
export const Delete = styled(Pressable)``;
export const SearchBox = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10%;
  align-items: center;
`;
