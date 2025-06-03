//게시글 컴포넌트 입니다.
import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, Image, Alert} from 'react-native';
import * as S from './Style';
import Settings from '../../../icons/settings.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {postReviewLike} from '../../../apis/Review/postRevieLike';
import {useDispatch, useSelector} from 'react-redux';
import {toggleLike} from '../../../store/slices/likeSlice';
import {RootState} from '../../../store/store';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Post = ({postData, reviewId, isInteractive = true}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // postData 구조에 맞게 데이터를 할당
  const {
    memberTinyInformation,
    photographerTinyInformation,
    createdAt,
    content,
    photoUrlList,
    photographerScore,
    placeScore,
    likeCount,
    isMeLiked,
  } = postData.data;
  const [likeCountState, setLikeCountState] = useState(likeCount); // likeCount 상태 관리
  console.log('postData:', postData);

  const formattedDateTime = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true, // 12시간제 (AM/PM 표시)
  }).format(new Date(createdAt));

  // 각 이미지를 렌더링할 함수
  const renderItem = ({item}) => (
    <S.Photo
      source={{uri: item}}
      resizeMode="cover"
      // 테스트용 :
      //source={require('../../../images/sample3.png')}
    />
  );
  const handlePress = () => {
    navigation.navigate('ReplyPage', {data: postData, date: formattedDateTime});
  };
  const handleAuthorProfile = () => {
    navigation.navigate('AuthorProfile');
  };
  // Redux에서 좋아요 상태 가져오기
  const isLiked = useSelector(
    (state: RootState) => state.like.likedPosts[reviewId] || false,
  );
  // 좋아요 버튼 클릭 시 Redux 상태 변경
  const toggleLikeStatus = () => {
    if (!isInteractive || !reviewId) {
      return;
    }
    postReviewLike(reviewId); // API 호출
    dispatch(toggleLike(reviewId)); // Redux 상태 업데이트
    // 현재 좋아요 상태 반대로 설정 & likeCount 증가/감소
    if (isLiked) {
      setLikeCountState(prev => prev - 1);
      Alert.alert('좋아요를 취소했습니다.');
    } else {
      setLikeCountState(prev => prev + 1);
      Alert.alert('리뷰를 좋아요했습니다.');
    }
  };

  return (
    <SafeAreaView>
      <S.PostComponent>
        {/* 가로로 스와이프 가능한 이미지 */}
        <S.PostImageBox>
          <FlatList
            data={photoUrlList} // 이미지 리스트
            renderItem={renderItem} // 각 이미지 렌더링
            keyExtractor={(item, index) => index.toString()}
            horizontal={true} // 가로로 스와이프
            snapToInterval={screenWidth} // 핵심: 정확히 화면 너비만큼 스냅
            showsHorizontalScrollIndicator={false} // 스크롤 바 숨기기
            pagingEnabled={true} // 이미지마다 스와이프 가능하도록 설정
          />
        </S.PostImageBox>
        <S.PostTextBox>
          <S.IconBox>
            <S.IconSize onPress={toggleLikeStatus}>
              <Icon
                name={isLiked ? 'heart' : 'heart-outline'} // 상태에 따라 아이콘 변경
                size={30}
                color={isLiked ? 'red' : 'black'}
              />
              <S.IconPress onPress={handlePress}>
                <Icon name={'chatbubble-outline'} size={27} color={'black'} />
              </S.IconPress>
            </S.IconSize>
            <S.IconSize>
              <Settings />
            </S.IconSize>
          </S.IconBox>

          <S.ProfileBox2>
            <S.Title onPress={handleAuthorProfile}>
              {photographerTinyInformation.nickname}
            </S.Title>
            <S.Score>평점 {photographerScore}★</S.Score>
          </S.ProfileBox2>

          <S.ProfileBox>
            {photographerTinyInformation.profilePhotoUrl ? (
              // profilePhotoUrl이 있을 때는 이미지 표시
              <S.Profile
                source={{uri: photographerTinyInformation.profilePhotoUrl}}
              />
            ) : (
              // profilePhotoUrl이 없을 때는 아이콘 표시
              <S.ProfileEmpty
                source={require('../../../images/sample_profile.png')}
              />
            )}
            <S.Name>{memberTinyInformation.nickname}</S.Name>
          </S.ProfileBox>
          <S.Contents>
            <S.Date>{formattedDateTime}</S.Date>
            <S.TextContents numberOfLines={3}>{content}</S.TextContents>
          </S.Contents>
          <S.Love>좋아요 {likeCountState}개</S.Love>
        </S.PostTextBox>
      </S.PostComponent>
    </SafeAreaView>
  );
};

export default Post;
