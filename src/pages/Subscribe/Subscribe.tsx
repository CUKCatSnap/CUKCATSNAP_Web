//구독 페이지 입니다.
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import SmallPost from '../../components/Subscribe/SmallPost/SmallPost';
import * as S from './Style';

const Subscribe = () => {
  const [showAuthor, setShowAuthor] = useState(true); // 작가 탭 항목 표시 여부 (초기 상태 : 출력 0)
  const [showPlace, setShowPlace] = useState(false); // 리뷰 탭 항목 표시 여부
  const [isAuthorActive, setIsAuthorActive] = useState(true); // 초기 상태: 작가 탭 활성화
  const [isPlaceActive, setIsPlaceActive] = useState(false);

  // 작가 탭 항목 터치 시 항목 출력
  const handleAuthorTab = () => {
    setIsAuthorActive(true); // 작가 탭 활성화
    setIsPlaceActive(false); // 리뷰 탭 비활성화
    setShowAuthor(true);
    setShowPlace(false);
  };

  // 리뷰 탭 항목 터치 시 항목 출력
  const handlePlaceTab = () => {
    setIsAuthorActive(false);
    setIsPlaceActive(true);
    setShowAuthor(false);
    setShowPlace(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader />
        <S.SearchTabContainer>
          <S.SearchTab onPress={handleAuthorTab}>
            <S.SearchTabText>Photographer</S.SearchTabText>
            <S.SearchTabBox isActive={isAuthorActive} />
          </S.SearchTab>
          <S.SearchTab onPress={handlePlaceTab}>
            <S.SearchTabText>Place</S.SearchTabText>
            <S.SearchTabBox isActive={isPlaceActive} />
          </S.SearchTab>
        </S.SearchTabContainer>
        <S.SubscribeContainer>
          {showAuthor && (
            <S.SubscribeBox>
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
            </S.SubscribeBox>
          )}
          {showPlace && (
            <S.SubscribeBox>
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
              <SmallPost />
            </S.SubscribeBox>
          )}
        </S.SubscribeContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Subscribe;
