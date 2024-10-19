import styled from 'styled-components/native';
import {View, Text, TextInput} from 'react-native';

export const SearchBarContainer = styled(View)`
  margin: 15px;
  justify-content: center;
`;

export const SearchInputBox = styled(TextInput)`
  background-color: #f3f3f3;
  border-radius: 15px;
  position: absolute;
  margin-top: 10px;
  width: 100%;
  padding: 10px 50px;
  font-size: 18px;
`;

export const IconBox = styled(View)`
  top: 25%;
  left: 2%;
  position: relative;
`;

export const IconBox2 = styled(View)`
  right: 1%;
  bottom: 25%;
  align-items: flex-end;
  position: relative;
`;
