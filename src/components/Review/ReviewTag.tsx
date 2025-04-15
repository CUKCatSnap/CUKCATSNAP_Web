//유저 마이페이지의 '내 리뷰' 태그입니다.
import React, {useState, useCallback, useEffect, useRef} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {SafeAreaView, Text, ScrollView, FlatList} from 'react-native';
import * as S from './Style';
import SmallPost from '../Subscribe/SmallPost/SmallPost';
import Post from '../Search/Post/Post';
import {fetchReviewAll} from '../../apis/UserReserve/getReviewAll';

const ReviewTag = () => {
  const [showFeed, setShowFeed] = useState(false); // 내 피드 탭 항목 표시 여부 (초기 상태 : 출력 0)
  const [showReview, setShowReview] = useState(true); // 내 리뷰 탭 항목 표시 여부
  const [isFeedActive, setIsFeedActive] = useState(false);
  const [isReviewActive, setIsReviewActive] = useState(true); // 초기 상태: 내 리뷰 탭 활성화
  const [review, setReview] = useState([]); // 리뷰 목록을 저장할 상태
  const [page, setPage] = useState(0); // 페이지 상태
  const [size] = useState(1); // 한 번에 불러올 데이터 개수
  const [hasMore, setHasMore] = useState(true); // 더 이상 불러올 데이터가 있는지 여부
  const flatListRef = useRef(null); // FlatList ref 추가

  // 내 리뷰 탭 항목 터치 시 항목 출력
  const handleReviewTab = () => {
    setIsFeedActive(false);
    setIsReviewActive(true);
    setShowFeed(false);
    setShowReview(true);
  };

  // 내 피드 탭 항목 터치 시 항목 출력
  const handleAuthorTab = () => {
    setIsFeedActive(true); // 작가 탭 활성화
    setIsReviewActive(false); // 리뷰 탭 비활성화
    setShowFeed(true);
    setShowReview(false);
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchReviewAll('All', page, size);
        const newReview = response.data.slicedData.reviewSearchResponseList;

        if (newReview && newReview.length > 0) {
          setReview(prevReview => [...prevReview, ...newReview]);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log('예약 데이터를 가져오는 중 오류가 발생했습니다.');
      }
    };

    if (hasMore) {
      fetch();
    }
  }, [page]);

  const loadMoreData = () => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <SafeAreaView>
      <S.SearchTabContainer>
        <S.SearchTab onPress={handleReviewTab}>
          <S.SearchTabText>내 리뷰</S.SearchTabText>
          <S.SearchTabBox isActive={isReviewActive} />
        </S.SearchTab>
        <S.SearchTab onPress={handleAuthorTab}>
          <S.SearchTabText>내 피드</S.SearchTabText>
          <S.SearchTabBox isActive={isFeedActive} />
        </S.SearchTab>
      </S.SearchTabContainer>

      {showReview && (
        <S.SearchListContainerReview>
          <FlatList
            showsVerticalScrollIndicator={false}
            ref={flatListRef}
            data={review}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Post postData={{data: item}} isInteractive={false} />
            )}
            onEndReached={loadMoreData} // 끝에 도달했을 때 추가 데이터 로드
            onEndReachedThreshold={0.5} // 리스트 끝에서 얼마나 남았을 때 호출할지 설정 (10%)
            initialNumToRender={size} // 처음에 렌더링할 아이템 개수
            maxToRenderPerBatch={size} // 한 번에 렌더링할 최대 아이템 개수
            windowSize={5} // FlatList의 렌더링 윈도우 크기
          />
        </S.SearchListContainerReview>
      )}

      {showFeed && (
        <S.SearchListContainerFeed>
          <SmallPost image={require('../../images/sample3.png')} />
          <SmallPost image={require('../../images/sample2.png')} />
          <SmallPost image={require('../../images/sample1.png')} />
        </S.SearchListContainerFeed>
      )}
    </SafeAreaView>
  );
};

export default ReviewTag;
