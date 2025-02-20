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
  height: 50%;
  width: 70%;
  border-radius: 50px;
`;

export const ModalFlatBox = styled(View)`
  margin: 0 10%;
  max-height: 75%; /* 최대 높이 설정 (스크롤 가능하도록) */
  overflow: hidden; /* 내용이 박스를 넘어가지 않도록 설정 */
`;
export const Btn = styled(View)`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Content = styled(Pressable)<isClickedProps>`
  border-radius: 10px;
  border: 3px;

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
`;
