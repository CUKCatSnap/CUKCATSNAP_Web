//하단 네비게이션 바 스타일 컴포넌트 입니다.

import styled from 'styled-components';
import {View} from 'react-native';

export const NavigateContainer = styled(View)`
  position: absolute;
`;

export const NavigateBox = styled(View)`
  width: 100%;
  height: 70px;
  background-color: gray;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 200%;
`;

export const Icon = styled(View)`
  margin: 5%;
`;
