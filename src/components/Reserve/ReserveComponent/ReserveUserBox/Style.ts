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

export const ReserveContainer = styled(TouchableOpacity)<ReserveContainerProps>`
  flex: 1;
  flex-direction: row;
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
  margin: 2% 5%;
  border-radius: 15px;
  padding: 5%;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
`;
export const ReserveTitleText = styled(Text)`
  font-size: 25px;
  color: black;
  font-weight: bold;
`;
export const ReserveText = styled(Text)`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const Line = styled(View)`
  width: 5px;
  height: 35px;
  background-color: #423cd2;
`;

export const Box = styled(View)`
  flex: 1;
  flex-direction: column;
`;
