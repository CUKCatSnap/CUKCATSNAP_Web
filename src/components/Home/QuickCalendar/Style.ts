import styled from 'styled-components';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const QuickIconContainer = styled(TouchableOpacity)`
  width: 94px;
  height: 94px;
  border-radius: 20px;
  background-color: gray;
  margin: 10px;
`;

export const QuickText = styled(Text)`
  color: gray;
  font-weight: bold;
  font-size: 20px;
`;
