import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import {Svg} from 'react-native-svg';

export const Post = styled(View)``;

//너비와 높이를 %로 정하면 가져올 때 컴포넌트가 합쳐지는 현상 발생
export const PostContainer = styled(Image)`
  width: 165px;
  height: 100px;
  border-radius: 20px;
  margin-bottom: 5px;
  background-color: black;
  z-index: 10;
`;

//width 를 이미지와 같이 설정해야 글자가 맞음
export const PostBox = styled(View)`
  align-items: center;
  flex-direction: row;
  width: 165px;
  padding: 0px 7px;
  justify-content: space-between;
`;

export const Point = styled(Svg)`
  width: 10%;
`;

export const NameText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const ReserveText = styled(Text)`
  font-size: 12px;
  color: #a1a1a1;
  padding: 0px 7px;
  justify-content: flex-end;
`;

export const Score = styled(Text)`
  color: gray;
  font-size: 10px;
`;
