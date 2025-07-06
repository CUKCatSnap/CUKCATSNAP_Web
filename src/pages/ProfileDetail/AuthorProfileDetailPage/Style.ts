import styled from 'styled-components/native';
import {View, Text, Pressable, TouchableOpacity, Image} from 'react-native';

interface PressProps {
  pressable: boolean;
}

export const AuthorProfileContainer = styled(View)`
  margin: 5% 7%;
  justify-content: center;
  margin-top: -5%;
`;

export const ProfileContainer = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5%;
  align-items: center;
`;

export const Profile = styled(View)`
  background-color: black;
  width: 50px;
  height: 50px;
  border-radius: 25px;
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
export const ProfileEmpty = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: gray;
`;
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
  margin: 1% 3%;
`;
export const ContentsBoxContainer = styled(View)`
  background-color: #f3f3f3;
  margin: 3% 0%;
  padding: 3% 3%;
  border-radius: 15px;
`;

export const Contents = styled(Text)`
  color: black;
  width: 50%;
`;
export const Price = styled(Text)`
  color: black;
  font-weight: bold;
`;

export const IntersectionContainer = styled(View)`
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 5%;
`;

export const IntersectionText = styled.Text<PressProps>`
  color: ${props => (props.pressable ? 'white' : 'black')};
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
  background-color: ${props => (props.pressable ? '#423cd2' : '#f3f3f3')};
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
export const ContentsAreaBox = styled(View)`
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 3%;
  margin: 2% 0%;
  flex-direction: row;
  align-items: center;
`;
export const ContentsAreaText = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 2% 2%;
  width: 25%;
`;
export const ContentsAreaText2 = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 2% 2%;
`;

export const ContentsAreaText3 = styled(Text)`
  color: black;
  font-size: 18px;
  margin: 2% 2%;
`;
export const Line = styled(View)`
  width: 3px;
  height: 100%;
  background-color: #423cd2;
  margin: 0% 3%;
`;

export const Line2 = styled(View)`
  width: 100%;
  height: 3px;
  margin: 3% 0%;
  background-color: #423cd2;
`;
export const Box = styled(View)`
  width: 65%;
`;
