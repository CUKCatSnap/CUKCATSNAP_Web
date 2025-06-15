//자기 소개 컴포넌트 입니다.
import React, {useState, useEffect, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {SafeAreaView, View, Text} from 'react-native';
import * as S from './Style';

import {getPhotographerIntroductionAuthor} from '../../../apis/Information/getPhotographerIntroductionAuthor';
import {getPhotographerIntroduction} from '../../../apis/Information/getPhotographerIntroduction';
type IntroductionProps = {
  photographerId?: number; // ?를 붙여서 optional로 만듦
};
const Introduction = ({photographerId}: IntroductionProps) => {
  // API 호출로 프로그램 데이터 가져오기
  const [introduction, setIntroduction] = useState(null);
  const isAuthor = useSelector(state => state.auth.isAuthor);
  const isUser = useSelector(state => state.auth.isUser);

  const loadIntroduction = async () => {
    if (isAuthor) {
      try {
        const response = await getPhotographerIntroductionAuthor();
        setIntroduction(response.data.introduction);
      } catch (error) {
        console.error('자기 소개를 불러오는 중 오류 발생:', error);
      }
    } else if (isUser) {
      try {
        const response = await getPhotographerIntroduction(photographerId);
        setIntroduction(response.data.introduction);
      } catch (error) {
        console.error('작가의 자기 소개를 불러오는 중 오류 발생:', error);
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadIntroduction();
    }, []),
  );

  return (
    <SafeAreaView>
      <S.ProfilePostBox>
        {introduction ? (
          <View>
            <S.AuthorFeedImage
              source={require('../../../images/sample3.png')}
            />
            <S.AuthorFeedProfile numberOfLines={3}>
              {introduction}
            </S.AuthorFeedProfile>
          </View>
        ) : (
          <S.BoxView>
            <S.ReserveText>설정한 자기소개가 없습니다.</S.ReserveText>
          </S.BoxView>
        )}
      </S.ProfilePostBox>
    </SafeAreaView>
  );
};

export default Introduction;
