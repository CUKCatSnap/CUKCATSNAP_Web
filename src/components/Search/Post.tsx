//게시글 컴포넌트 입니다.
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as S from './style';
import Heart from '../../icons/heart.svg';
import Chat from '../../icons/chat.svg';

const Post = () => {
  return (
    <SafeAreaView>
      <S.PostComponent>
        <S.PostImageBox />

        <S.PostTextBox>
          <S.Title>나 똘똘 작가</S.Title>
          <S.ProfileBox>
            <S.Profile />
            <S.Name>Imsamrt</S.Name>
            <S.Score>평점 4.8★</S.Score>
          </S.ProfileBox>
          <S.Contents>
            <S.Date>2024/9/20 18:00</S.Date>
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
