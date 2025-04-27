import styled from 'styled-components/native';
import {View, Text, Pressable} from 'react-native';
// isActive props 타입 정의
interface SelectProps {
  isSelect: boolean;
}
export const CreateContainer = styled(View)`
  margin: 7%;
`;
export const Sub = styled(View)`
  padding: 1% 0%;
`;

export const City = styled(Text)<SelectProps>`
  color: ${({isSelect}) => (isSelect ? 'black' : 'rgb(196, 196, 196)')};
  font-size: 20px;
  font-weight: bold;
`;
export const Box = styled(Pressable)`
  border-radius: 10px;
  margin: 1%;
  padding: 3%;
  border: 1px #bebebe;
  background-color: transparent;
  align-items: center;
`;
export const CityBox = styled(View)`
  width: 100%;
`;
export const CityContainer = styled(View)`
  flex: 1;
`;
export const Content = styled(Pressable)<SelectProps>`
  border-radius: 10px;
  border: 2px
    ${({isSelect}) => (isSelect ? 'rgb(209, 219, 231)' : 'transparent')};

  margin: 1%;
  padding: 1%;
  justify-content: center;
  align-items: center;
`;
export const ContentText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
