import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const SettingContainer = styled(View)`
  margin: 0;
  padding: 0;
`;

export const SettingContents = styled(TouchableOpacity)`
  width: 100%;
  background-color: transparent;
  align-items: flex-start;
  padding: 5%;
  margin: 1% 2%;
  padding-bottom: 5%;
  flex-direction: row;
  justify-content: space-between;
`;

export const SettingText = styled(Text)`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;
