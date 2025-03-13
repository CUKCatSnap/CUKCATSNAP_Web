import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

interface ReserveContainerProps {
  state:
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED'
    | 'MEMBER_CANCELLED'
    | 'PHOTOGRAPHY_CANCELLED'
    | string;
}

export const ReserveContainer = styled(TouchableOpacity)`
  flex-direction: column;
  justify-content: space-between;
  margin: 2% 5%;
  border: 1px solid rgb(209, 219, 231);
  border-radius: 15px;
  gap: 10px;
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
  width: 15%;
  position: absolute;
  height: 100%;
  right: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 1;
`;

export const ReserveBox = styled(View)``;

export const TextContainer = styled(View)`
  padding: 5%;
  flex-direction: row;
  align-items: center;
`;

export const ReserveTitleText = styled(Text)`
  font-size: 25px;
  color: black;
  font-weight: bold;
  width: 40%;
  margin: 0% 3%;
  margin-top: -1%;
`;
export const ReserveText = styled(Text)`
  font-size: 20px;
  color: #3e23b9;
  font-weight: bold;
  width: 20%;
  align-items: end;
  z-index: 100;
`;
export const ReserveText2 = styled(Text)`
  font-size: 20px;
  color: black;
  font-weight: bold;
  width: 100%;
  z-index: 100;
`;
export const Line = styled(View)`
  width: 2px;
  height: 100%;

  background-color: rgb(209, 219, 231);
`;

export const Box = styled(View)`
  flex: 1;
  flex-direction: column;
`;
export const PointContainer = styled(View)`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;
export const SvgBox = styled(View)`
  margin-top: 3px;
  margin-right: 5px;
`;
