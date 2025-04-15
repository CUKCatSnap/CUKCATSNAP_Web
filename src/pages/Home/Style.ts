import {ScrollView, View, Text} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  margin-left: 5%;
`;

export const MyReserveContainer = styled(ScrollView)`
  margin-bottom: 5%;
`;
export const RecentReserveContainer = styled(ScrollView)`
  margin-bottom: 10%;
`;
export const QuickIconContainer = styled(View)`
  margin-bottom: 10%;
  flex-direction: row;
  justify-content: center;
`;
export const ReserveText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: #bebebe;
  justify-content: center;
  align-items: center;
`;

export const ReserveView = styled(View)`
  justify-content: center;
  align-items: center;
  margin: 20%;
`;
export const LoadingContainer = styled(View)`
  margin: 23%;
`;
