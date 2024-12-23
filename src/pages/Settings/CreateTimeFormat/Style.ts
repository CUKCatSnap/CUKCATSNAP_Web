import styled from 'styled-components/native';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInputMask,
  TextInput,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const TimeViewContainer = styled(View)`
  margin: 0 7%;
`;

export const TimeView = styled(View)`
  z-index: 10;
`;

export const PickerBox = styled(View)`
  margin: 0 5%;
`;

export const TimeBox = styled(View)`
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  margin: 5%;
`;
export const TimeTextBox = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin: 3% 5%;
`;

export const TimeText = styled(TextInput)`
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 5%;
  font-size: 15px;
`;

export const TimeDelete = styled(TouchableOpacity)``;
