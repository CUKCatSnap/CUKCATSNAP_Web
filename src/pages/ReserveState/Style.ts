import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const StateComponent = styled(View)``;

export const BtnText = styled(Text)`
  font-size: 20px;
  justify-content: center;
  color: black;
`;

export const StateBox = styled(View)`
  margin: 0% 7%;
`;

//가로로 버튼 두개 넣기, 화면에 꽉차게
export const BtnBox = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 5% 0%;
`;

export const Btn = styled(View)`
  justify-content: space-evenly;
  flex: 1;
`;
