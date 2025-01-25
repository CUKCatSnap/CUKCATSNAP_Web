//구독 화면의 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';

const SmallPost = ({image}: {image: any}) => {
  return (
    <SafeAreaView>
      <S.Post>
        <S.PostContainer source={image} />
        <S.PostBox>
          <S.NameText>나 똘똘 작가</S.NameText>
          <S.Score>평점 4.8★</S.Score>
        </S.PostBox>
        <S.DateText>2024/9/20</S.DateText>
      </S.Post>
    </SafeAreaView>
  );
};

export default SmallPost;
