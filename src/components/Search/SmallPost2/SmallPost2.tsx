//검색창에 나오는 결과 중 '작가' 항목의 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';

const SmallPost2 = ({image}: {image: any}) => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  return (
    <SafeAreaView>
      <S.Post>
        <S.PostContainer source={image} />
        <S.PostBox>
          <S.NameText onPress={() => navigation.navigate('AuthorProfile')}>
            나 똘똘 작가
          </S.NameText>
          <S.Score>평점 4.8★</S.Score>
        </S.PostBox>
        <S.ReserveText>최근 예약 5회</S.ReserveText>
      </S.Post>
    </SafeAreaView>
  );
};

export default SmallPost2;
