import styled from 'styled-components';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const QuickIconContainer = styled(TouchableOpacity)`
  width: 94px;
  height: 94px;
  border-radius: 20px;
  background-color: #f3f3f3;
  margin: 10px;
  z-index: 0;
  justify-content: center;
  align-items: center;
`;

export const QuickText = styled(Text)`
  color: gray;
  font-weight: bold;
  font-size: 20px;
`;
