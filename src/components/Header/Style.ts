import styled from 'styled-components/native';
import {View, Text} from 'react-native';

export const HeaderContainer = styled(View)`
  margin-left: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
  margin-bottom: 15%;
  padding-left: 5%;
  padding-right: 10%;
`;

export const HeaderText = styled(Text)`
  font-size: 40px;
  font-weight: bold;
  color: transparent;
`;
export const SideBarBox = styled(View)`
  z-index: 100;
  position: absolute;
  margin: 0;
  padding: 0;
`;
