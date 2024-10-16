import styled from 'styled-components/native';
import {View, Text} from 'react-native';

export const AlarmBoxContainer = styled(View)`
  background-color: #f8f7f7;
  width: 85%;
  justify-content: center;
  margin: 3% auto;
  height: 105px;
  padding: 4%;
  border-radius: 10px;
`;

export const TitleText = styled(Text)`
  color: black;
  font-size: 14px;
  margin-bottom: 3px;
  font-weight: bold;
`;

export const ContentText = styled(Text)`
  color: black;
  font-size: 14px;
  white-space: pre-wrap;
`;

export const ContentDate = styled(Text)`
  color: black;
  font-size: 14px;
`;
