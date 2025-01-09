//게시글 컴포넌트 입니다.
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as S from './Style';
import Settings from '../../../icons/settings.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Post = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ReplyPage');
  };

  const handleAuthorProfile = () => {
    navigation.navigate('AuthorProfile');
  };

  return (
    <SafeAreaView>
      <S.PostComponent>
        <S.PostImageBox />
        <S.PostTextBox>
          <S.IconBox>
            <S.IconSize>
              <Icon name={'heart-outline'} size={30} color={'black'} />
              <S.IconPress onPress={handlePress}>
                <Icon name={'chatbubble-outline'} size={27} color={'black'} />
              </S.IconPress>
            </S.IconSize>
            <S.IconSize>
              <Settings />
            </S.IconSize>
          </S.IconBox>
          <S.Title onPress={handleAuthorProfile}>나똘똘 모델</S.Title>
          <S.ProfileBox>
            <S.Profile />
            <S.Name>Imsamrt</S.Name>
            <S.Score>평점 4.8★</S.Score>
          </S.ProfileBox>
          <S.Contents>
            <S.Date>2024/9/20</S.Date>
            <S.TextContents>
              아래 사진은 제가 올림픽공원에서 찍은 사진인데요. 모델이 있으면 더
              예쁘게 나올 것 같아요. 제 이름을 클릭하시면 저에 대한 상세
              페이지를 보실 ...
            </S.TextContents>
          </S.Contents>
          <S.Love>좋아요 471개</S.Love>
        </S.PostTextBox>
      </S.PostComponent>
    </SafeAreaView>
  );
};

export default Post;
