//검색 페이지 입니다.
import React, {useState} from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import Post from '../../../components/Search/Post/Post';
import SearchBar from '../../../components/Search/SearchBar/SearchBar';
import {useNavigation} from '@react-navigation/native';
import * as S from './Style';
import X from '../../../icons/x.svg';
import Postrow from '../../../icons/postrow.svg';
import PostSquare from '../../../icons/postsquare.svg';
const Search = () => {
  const [inputText, setInputText] = useState(''); // 입력 상태 추가
  const [searchText, setSearchText] = useState(''); // 검색어 상태 추가
  const [showSuggestions, setShowSuggestions] = useState(false); // 제안 항목 표시 여부
  const [showAuthor, setShowAuthor] = useState(true); // 작가 탭 항목 표시 여부 (초기 상태 : 출력 0)
  const [showReview, setShowReview] = useState(false); // 리뷰 탭 항목 표시 여부
  const [isAuthorActive, setIsAuthorActive] = useState(true); // 초기 상태: 작가 탭 활성화
  const [isReviewActive, setIsReviewActive] = useState(false);

  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  // 검색어 입력 처리
  const handleSearchInput = (text: string) => {
    setInputText(text); // 입력한 텍스트 상태 업데이트
    if (text.trim() === '') {
      setShowSuggestions(false); // 입력값이 없으면 제안 항목 숨기기
    } else {
      setShowSuggestions(true); // 입력값이 있으면 제안 항목 보이기
    }
  };
  // 검색창 포커스 핸들러
  const handleFocus = () => {
    if (inputText.trim()) {
      setShowSuggestions(true); // 검색어가 있을 때만 제안 항목 보이기
    }
  };

  // 엔터 키 입력 처리
  const handleSubmitEditing = () => {
    if (inputText.trim()) {
      setSearchText(inputText); // 엔터 입력 시에만 searchText 업데이트
      setShowSuggestions(false); // 엔터 입력 후 제안 항목 숨기기
      navigation.navigate('SearchResultPage', {query: inputText}); // 검색 상세 페이지로 이동
    }
  };

  // 작가 탭 항목 터치 시 항목 출력
  const handleAuthorTab = () => {
    setIsAuthorActive(true); // 작가 탭 활성화
    setIsReviewActive(false); // 리뷰 탭 비활성화
    setShowAuthor(true);
    setShowReview(false);
  };

  // 리뷰 탭 항목 터치 시 항목 출력
  const handleReviewTab = () => {
    setIsAuthorActive(false); // 작가 탭 활성화
    setIsReviewActive(true); // 리뷰 탭 비활성화
    setShowAuthor(false);
    setShowReview(true);
  };

  const handleSortPost = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.SearchContainer>
          <SearchBar
            onChangeText={handleSearchInput} // 텍스트 입력 처리
            onFocus={handleFocus} // 포커스 시 제안 항목 표시
            onSubmitEditing={handleSubmitEditing} // 엔터 입력 처리
          />

          {showSuggestions && (
            <S.SearchLankingContainer>
              <S.HotPlace>핫 플레이스</S.HotPlace>
              <S.LankBox>
                <S.LankNumber>1</S.LankNumber>
                <S.Lank>북촌</S.Lank>
              </S.LankBox>
              <S.LankBox>
                <S.LankNumber>2</S.LankNumber>
                <S.Lank>한옥마을</S.Lank>
              </S.LankBox>
              <S.LankBox>
                <S.LankNumber>3</S.LankNumber>
                <S.Lank>가톨릭대학교</S.Lank>
              </S.LankBox>
              <S.LankBox>
                <S.LankNumber>4</S.LankNumber>
                <S.Lank>북촌</S.Lank>
              </S.LankBox>
              <S.SearchUnderBar />
              <S.SearchRecent>
                <S.SearchRecentText>
                  {searchText}
                  {searchText && <X />}
                </S.SearchRecentText>
              </S.SearchRecent>
            </S.SearchLankingContainer>
          )}
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

          <S.SearchSort>
            <S.SearchSortText>최신순 v</S.SearchSortText>
            <S.SearchSortIcon onPress={handleSortPost}>
              <Postrow />
            </S.SearchSortIcon>
          </S.SearchSort>

          {showAuthor && (
            <S.SearchListContainer>
              <Post />
              <Post />
              <Post />
            </S.SearchListContainer>
          )}
          {showReview && (
            <S.SearchListContainer>
              <Post />
              <Post />
            </S.SearchListContainer>
          )}
        </S.SearchContainer>
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

export default Search;
