import styled from 'styled-components/native';
import {Text, View, Dimensions, Pressable} from 'react-native';
// props 타입 지정
interface SideBarProps {
  width: number;
  height: number;
}

export const SideBarContainer = styled(Pressable)<SideBarProps>`
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
`;

export const SideBarBox = styled(View)<SideBarProps>`
  background-color: white;
  z-index: 200;
  position: absolute;
`;

export const SideBarText = styled(Text)`
  color: black;
  font-size: 18px;
  font-weight: bold;
  padding: 10% 0%;
`;

export const Container = styled(View)`
  z-index: 1000;
`;

export const TextBox = styled(View)`
  width: 100%;
  background-color: transparent;
  align-items: flex-end;
  justify-content: center;
  padding: 0% 5%;
`;

export const Line = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2px;
  background-color: rgb(231, 231, 231);
`;
