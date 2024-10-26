//검색창 하단 바 입니다.
import React, {useState} from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import * as S from './Style';
import SmallPost from '../../Subscribe/SmallPost/SmallPost';

const SearchTag = () => {
  const [showAuthor, setShowAuthor] = useState(true); // 작가 탭 항목 표시 여부 (초기 상태 : 출력 0)
  const [showReview, setShowReview] = useState(false); // 리뷰 탭 항목 표시 여부
  const [isAuthorActive, setIsAuthorActive] = useState(true); // 초기 상태: 작가 탭 활성화
  const [isReviewActive, setIsReviewActive] = useState(false);

  // 작가 탭 항목 터치 시 항목 출력
  const handleAuthorTab = () => {
    setIsAuthorActive(true); // 작가 탭 활성화
    setIsReviewActive(false); // 리뷰 탭 비활성화
    setShowAuthor(true);
    setShowReview(false);
  };

  // 리뷰 탭 항목 터치 시 항목 출력
  const handleReviewTab = () => {
    setIsAuthorActive(false);
    setIsReviewActive(true);
    setShowAuthor(false);
    setShowReview(true);
  };

  return (
    <SafeAreaView>
      <S.SearchTabContainer>
        <S.SearchTab onPress={handleAuthorTab}>
          <S.SearchTabText>작가</S.SearchTabText>
          <S.SearchTabBox isActive={isAuthorActive} />
        </S.SearchTab>
        <S.SearchTab onPress={handleReviewTab}>
          <S.SearchTabText>리뷰</S.SearchTabText>
          <S.SearchTabBox isActive={isReviewActive} />
        </S.SearchTab>
      </S.SearchTabContainer>
      {showAuthor && (
        <S.SearchListContainer>
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
        </S.SearchListContainer>
      )}
      {showReview && (
        <S.SearchListContainer>
          <SmallPost />
          <SmallPost />
        </S.SearchListContainer>
      )}
    </SafeAreaView>
  );
};

export default SearchTag;
