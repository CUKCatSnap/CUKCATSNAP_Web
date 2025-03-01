import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
interface ReserveContainerProps {
  state:
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED'
    | 'MEMBER_CANCELLED'
    | 'PHOTOGRAPHY_CANCELLED'
    | string;
}
export const StateComponent = styled(View)``;

export const Container = styled(View)`
  border: 1px solid rgb(209, 219, 231);
  margin: 0% 7%;
  border-radius: 10px;
  flex-direction: row;
`;

export const ContainerBox = styled(View)<ReserveContainerProps>`
  background-color: ${({state}) => {
    switch (state) {
      case 'PENDING':
        return 'rgb(225, 224, 236)';
      case 'APPROVED':
        return 'rgb(188, 187, 233)';
      case 'REJECTED':
        return 'rgb(250, 135, 114)';
      case 'MEMBER_CANCELLED':
        return 'rgb(211, 211, 211)'; // 취소된 예약
      case 'PHOTOGRAPHY_CANCELLED':
        return 'rgb(211, 211, 211)'; // 작가가 취소한 예약
      default:
        return 'rgb(188, 187, 233)'; // 기본 배경색
    }
  }};
  width: 30%;
  height: 100%;
  right: 0;
  position: absolute;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-shrink: 0; /* 크기 유지 */
`;

export const ContainerText = styled(View)`
  padding: 7%;
  width: 70%;
`;

export const Title = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 2%;
`;
export const Content = styled(Text)`
  color: black;
  font-size: 20px;
  margin: 1% 0%;
`;
export const BtnText = styled(Text)`
  font-size: 20px;
  color: black;
  margin: 0% 2%;
  margin-top: 3%;
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
export const Btn2 = styled(View)`
  margin: 3% 0%;
`;
