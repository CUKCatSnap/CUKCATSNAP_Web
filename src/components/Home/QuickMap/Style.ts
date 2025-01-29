import styled from 'styled-components';
import {View, Text, Pressable, TouchableOpacity, Image} from 'react-native';

export const QuickIconContainer = styled(TouchableOpacity)``;

export const QuickMapBox = styled(Image)`
  width: 94px;
  height: 94px;
  border-radius: 20px;
  margin: 10px;
`;

export const QuickText = styled(Text)`
  color: gray;
  font-weight: bold;
  font-size: 20px;
`;
