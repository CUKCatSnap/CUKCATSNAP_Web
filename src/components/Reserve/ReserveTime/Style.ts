import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

export const Time = styled(TouchableOpacity)`
  border-color: ${({disabled}) =>
    disabled ? 'rgb(238, 238, 238);' : 'rgb(209, 219, 231);'};
  border-radius: 10px;
  border: 1px;
  padding: 0px 10px;
  margin: 3px 3px;
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;
export const TimeBox = styled(View)`
  justify-content: center;
  align-items: center;
`;
