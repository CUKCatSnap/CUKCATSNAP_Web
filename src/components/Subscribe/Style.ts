import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native';

export const TitleContainer = styled(ScrollView)`
  margin-left: 5%;
`;

export const TitleBox = styled(View)`
  margin: auto 5px;
`;

export const TitleText = styled(Text)`
  color: black;
  font-size: 20px;
  font-weight: bold;
  flex-direction: row;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const TitleLine = styled(View)`
  height: 3px;
  margin-left: 10px;
  background-color: #423cda;
`;
