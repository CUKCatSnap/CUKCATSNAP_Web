//검색 페이지 입니다.
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Post from '../../../components/Search/Post/Post';
import SearchBar from '../../../components/Search/SearchBar/SearchBar';
import {useNavigation} from '@react-navigation/native';
import * as S from './Style';
import X from '../../../icons/x.svg';
import SmallPost2 from '../../../components/Search/SmallPost2/SmallPost2';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import {useSelector, useDispatch} from 'react-redux';
import {addSearch, deleteSearch} from '../../../store/slices/searchSlice';
import {fetchReviewSearch} from '../../../apis/Review/getReviewSearch';

const SearchResultPage = ({route}) => {
  const {query, reviewData} = route.params;
  const [inputText, setInputText] = useState(query); // 입력 상태 추가
  const [showSuggestions, setShowSuggestions] = useState(false); // 제안 항목 표시 여부
  const [showAuthor, setShowAuthor] = useState(true); // 작가 탭 항목 표시 여부 (초기 상태 : 출력 0)
  const [showFeed, setShowFeed] = useState(false); // 리뷰 탭 항목 표시 여부
  const [showReview, setShowReview] = useState(false); // 리뷰 탭 항목 표시 여부
  const [isAuthorActive, setIsAuthorActive] = useState(true); // 초기 상태: 작가 탭 활성화
  const [isFeedActive, setIsFeedActive] = useState(false);
  const [isReviewActive, setIsReviewActive] = useState(false);

  const navigation = useNavigation(); // 네비게이션 객체 가져오기
  const dispatch = useDispatch();

  // Redux 상태에서 검색어 기록 가져오기
  const searchTexts = useSelector(state => state.search.history);

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
    const trimmedText = inputText.trim();
    // 입력값이 숫자가 아닐 경우 요청하지 않음
    if (!trimmedText || isNaN(Number(trimmedText))) {
      return;
    }
    // Redux에 검색 기록 추가
    if (inputText.trim()) {
      dispatch(addSearch(inputText.trim())); // Redux 상태 업데이트
      setShowSuggestions(false); // 제안 항목 숨기기

      // 숫자를 입력하면 리뷰 조회 가능 (리뷰 id로 리뷰 조회)
      fetchReviewSearch(Number(trimmedText))
        .then(data => {
          if (data) {
            navigation.navigate('SearchResultPage', {
              reviewData: data,
              query: inputText,
            });
            console.log('전달 완료', data);
          } else {
            // data가 null인 경우에도 페이지를 계속 넘어가게 하기
            navigation.navigate('SearchResultPage', {
              reviewData: {},
              query: inputText,
            });
            console.log('해당 리뷰를 찾을 수 없습니다.');
          }
        })
        .catch(error => {
          // 요청 실패 시에도 페이지를 넘어가게 하기
          navigation.navigate('SearchResultPage', {
            reviewData: {},
            query: inputText,
          });
          console.log('에러 발생:', error);
        });
    }
  };

  // 특정 검색 기록 삭제
  const handleDeleteSearchText = (textToDelete: string) => {
    dispatch(deleteSearch(textToDelete)); // 리덕스 상태에서 해당 검색어 삭제
  };

  // 작가 탭 항목 터치 시 항목 출력
  const handleAuthorTab = () => {
    setIsAuthorActive(true); // 작가 탭 활성화
    setIsFeedActive(false);
    setIsReviewActive(false); // 리뷰 탭 비활성화
    setShowAuthor(true);
    setShowFeed(false);
    setShowReview(false);
  };

  // 피드 탭 항목 터치 시 항목 출력
  const handleFeedTab = () => {
    setIsAuthorActive(false);
    setIsFeedActive(true);
    setIsReviewActive(false);
    setShowAuthor(false);
    setShowFeed(true);
    setShowReview(false);
  };

  // 리뷰 탭 항목 터치 시 항목 출력
  const handleReviewTab = () => {
    setIsAuthorActive(false); // 작가 탭 활성화
    setIsFeedActive(false);
    setIsReviewActive(true); // 리뷰 탭 비활성화
    setShowAuthor(false);
    setShowFeed(false);
    setShowReview(true);
  };

  // 검색어 클릭 시 SearchResultPage로 네비게이션
  const handleSearchClick = (text: string) => {
    // 상태 업데이트 후 네비게이션
    setInputText(text); // 상태 업데이트
    const trimmedText = inputText.trim();
    // 입력값이 숫자가 아닐 경우 요청하지 않음
    if (!trimmedText || isNaN(Number(trimmedText))) {
      return;
    }

    // 숫자를 입력하면 리뷰 조회 가능 (리뷰 id로 리뷰 조회)
    fetchReviewSearch(Number(trimmedText))
      .then(data => {
        if (data) {
          navigation.navigate('SearchResultPage', {
            reviewData: data,
            query: inputText,
          });
          console.log('전달 완료', data);
        } else {
          // data가 null인 경우에도 페이지를 계속 넘어가게 하기
          navigation.navigate('SearchResultPage', {
            reviewData: {},
            query: inputText,
          });
          console.log('해당 리뷰를 찾을 수 없습니다.');
        }
      })
      .catch(error => {
        // 요청 실패 시에도 페이지를 넘어가게 하기
        navigation.navigate('SearchResultPage', {
          reviewData: {},
          query: inputText,
        });
        console.log('에러 발생:', error);
      });
    setTimeout(() => {
      navigation.replace('SearchResultPage', {
        query: text, // 클릭된 검색어 전달
      });
    }, 0); // 상태 업데이트 후 조금 기다려서 네비게이션 호출
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text="검색 결과" />
        <S.SearchContainer>
          <SearchBar
            value={inputText} // 검색창에 기본적으로 텍스트 값 표시
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
                {searchTexts.map(text => (
                  <S.SearchBox key={text}>
                    <TouchableOpacity onPress={() => handleSearchClick(text)}>
                      <S.SearchRecentText>{text}</S.SearchRecentText>
                    </TouchableOpacity>
                    <S.Delete onPress={() => handleDeleteSearchText(text)}>
                      <X />
                    </S.Delete>
                  </S.SearchBox>
                ))}
              </S.SearchRecent>
            </S.SearchLankingContainer>
          )}
          <S.SearchTabContainer>
            <S.SearchTab onPress={handleAuthorTab}>
              <S.SearchTabText>작가</S.SearchTabText>
              <S.SearchTabBox isActive={isAuthorActive} />
            </S.SearchTab>
            <S.SearchTab onPress={handleFeedTab}>
              <S.SearchTabText>피드</S.SearchTabText>
              <S.SearchTabBox isActive={isFeedActive} />
            </S.SearchTab>
            <S.SearchTab onPress={handleReviewTab}>
              <S.SearchTabText>리뷰</S.SearchTabText>
              <S.SearchTabBox isActive={isReviewActive} />
            </S.SearchTab>
          </S.SearchTabContainer>

          {showAuthor && (
            <S.SearchListContainer>
              <S.SearchListAuthorBox>
                <SmallPost2 image={require('../../../images/sample1.png')} />
                <SmallPost2 image={require('../../../images/sample2.png')} />
                <SmallPost2 image={require('../../../images/sample3.png')} />
                <SmallPost2 image={require('../../../images/sample1.png')} />
                <SmallPost2 image={require('../../../images/sample2.png')} />
              </S.SearchListAuthorBox>
            </S.SearchListContainer>
          )}

          {showFeed && (
            <S.SearchListContainer>
              <S.SearchListAuthorBox>
                <SmallPost2 image={require('../../../images/sample2.png')} />
              </S.SearchListAuthorBox>
            </S.SearchListContainer>
          )}
          {showReview && (
            <S.SearchListContainer>
              {reviewData && Object.keys(reviewData).length > 0 ? (
                <Post postData={reviewData} reviewId={query} />
              ) : (
                <S.SearchBox2>
                  <S.SearchText>검색 결과가 없습니다.</S.SearchText>
                </S.SearchBox2>
              )}
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

export default SearchResultPage;
