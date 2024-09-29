import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native';

export const TitleContainer = styled(ScrollView)``;

export const TitleText = styled(Text)`
  color: gray;
  font-size: 25px;
  font-weight: bold;
  flex-direction: row;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const TitleLine = styled(View)`
  flex: 1;
  height: 3px;
  margin-left: 10px;
  background-color: #423cda;
`;
