import styled from 'styled-components/native';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';

interface isClickedProps {
  isClicked: boolean;
}

export const ModalViewContainer = styled(View)`
  background-color: rgba(117, 117, 117, 0.5);
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled(View)`
  background-color: white;
  height: 60%;
  width: 75%;
  border-radius: 30px;
  justify-content: center;
`;

export const ModalFlatBox = styled(View)`
  margin: 5% 10%;
  padding-bottom: 5%;
  max-height: 100%; /* 최대 높이 설정 (스크롤 가능하도록) */
  overflow: hidden; /* 내용이 박스를 넘어가지 않도록 설정 */
`;
export const Btn = styled(View)``;

export const Content = styled(Pressable)<isClickedProps>`
  border-radius: 10px;
  border: 2px;
  border-color: ${props =>
    props.isClicked ? '#503bc7' : 'rgb(209, 219, 231)'};
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
`;

export const ContentsText = styled(Text)``;

export const FormatText = styled(Text)`
  font-weight: bold;
  color: black;
  font-size: 18px;
`;
export const BtnBox = styled(View)`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin: 5% 0%;
`;
export const TimeText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #b1b1b1;
`;

export const TextBox = styled(View)`
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;
