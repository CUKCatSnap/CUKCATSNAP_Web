import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity, Image} from 'react-native';

interface PressProps {
  isPress: boolean;
}

export const AuthorProfileContainer = styled(View)`
  margin: 0 7%;
  justify-content: center;
`;

export const ProfileContainer = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5%;
  padding-top: 0px;
  align-items: center;
`;
export const ProfileEmpty = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: gray;
`;
export const ProfileBox = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  gap: 80%;
`;

export const ProfileTextBox = styled(View)``;

export const AuthorNickName = styled(Text)`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;
export const AuthorName = styled(Text)`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;
export const AuthorScore = styled(Text)`
  color: #a1a1a1;
  font-size: 13px;
`;
export const AuthorRecentReserve = styled(Text)`
  color: #a1a1a1;
  font-size: 13px;
`;

export const ProfilePostBox = styled(View)``;

export const AuthorFeedImage = styled(Image)`
  width: 100%;
  height: 213px;
  background-color: black;
  border-radius: 15px;
`;
export const AuthorFeedProfile = styled(Text)`
  color: black;
  margin: 1% 0;
  font-size: 12px;
`;

export const ContentsBox = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  margin: 1% 0;
`;
export const Box = styled(View)`
  margin-top: 5%;
`;
export const Contents = styled(Text)`
  color: #747272;
  width: 50%;
`;
export const Price = styled(Text)`
  color: black;
  font-weight: bold;
`;

export const IntersectionContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 5% 0%;
`;

export const IntersectionText = styled.Text<PressProps>`
  color: ${props => (props.isPress ? 'white' : 'black')};
  font-size: 13px;
  font-weight: bold;
  padding-bottom: 2px;
  justify-content: center;
  align-items: center;
`;
export const Intersection = styled.Pressable<PressProps>`
  width: 50%;
  height: 25px;
  border-radius: 5px;
  justify-content: space-evenly;
  flex: 1;
  align-items: center;
  background-color: ${props => (props.isPress ? '#423cd2' : '#f3f3f3')};
`;

//2열 정렬 및 간격 일정하게
export const PostContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProgramText = styled(Text)`
  margin: 10% 0;
  color: gray;
  font-size: 18px;
`;
export const ProgramView = styled(View)`
  align-items: center;
`;
