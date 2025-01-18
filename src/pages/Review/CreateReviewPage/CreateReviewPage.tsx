//새로운 리뷰를 작성하는 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  View,
  Button,
  Image,
} from 'react-native';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import LoginBtn from '../../../components/Login/LoginBtn';
import {createReview} from '../../../apis/Review/postReview';
import {
  launchImageLibrary,
  launchCamera,
  Asset,
} from 'react-native-image-picker';
import CalendarBtn from '../../../components/Calendar/CalendarBtn/CalendarBtn';
import * as S from './Style';
import RatingStar from '../../../components/Rating/Rating';

const CreateReviewPage = () => {
  const [placeScore, setPlaceScore] = useState('');
  const [photographerScore, setPhotographerScore] = useState('');
  const [content, setContent] = useState('');
  const [photoFileNameList, setPhotoFileNameList] = useState([]);
  const [reservationId, setReservationId] = useState('');
  const [isdisabled, setDisabled] = useState(false);
  const [images, setImages] = useState<Asset[]>([]); // 선택된 이미지들의 배열
  //별점 상태
  const [ratingPlace, setRatingPlace] = useState(0);
  const [ratingAuthor, setRatingAuthor] = useState(0);
  const handleRatingChangePlace = (newRating: number) => {
    setRatingPlace(newRating);
  };
  const handleRatingChangeAuthor = (newRating: number) => {
    setRatingAuthor(newRating);
  };
  // 갤러리에서 이미지 선택
  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo', // 사진만 선택
      selectionLimit: 0, // 여러 개 선택 가능 (0 = 무제한)
      quality: 1, // 이미지 품질 (1 = 최대)
    });

    if (result.didCancel) {
      Alert.alert('알림', '이미지 선택이 취소되었습니다.');
    } else if (result.errorMessage) {
      Alert.alert(
        '오류',
        result.errorMessage || '이미지를 선택할 수 없습니다.',
      );
    } else if (result.assets) {
      console.log('선택한 이미지들:', result.assets); // 선택된 이미지들 확인

      // 선택한 이미지 파일명만 추출하여 상태에 저장
      const fileNames = result.assets.map(asset => asset.fileName);
      setPhotoFileNameList(fileNames); // photoFileNameList 상태 업데이트

      setImages(result.assets); // 선택된 이미지들 저장
    }
  };

  //작성한 리뷰 보내기(post)
  const handleSubmitAuthor = async () => {
    const requestBody = {
      reservationId,
      placeScore: ratingPlace,
      photographerScore: ratingAuthor,
      content,
      photoFileNameList,
    };
    console.log(requestBody);
    /*
    const result = await createReview(requestBody);
    if (result) {
      Alert.alert('리뷰가 성공적으로 등록되었습니다.');
    } else {
      Alert.alert('리뷰 등록에 실패했습니다.');
    }*/
  };

  //리뷰 추가 버튼 활성화
  useEffect(() => {
    if (!ratingPlace || !content || !ratingAuthor || !photoFileNameList) {
      setDisabled(true); // 입력이 모두 있을 경우 버튼 활성화
    } else {
      setDisabled(false);
    }
  }, [ratingPlace, content, ratingAuthor, photoFileNameList]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'리뷰 작성하기'} />
        <S.Container>
          <S.RatingContainer>
            <S.TitleText>장소 평점</S.TitleText>
            <S.RatingBox>
              <RatingStar onRatingChange={handleRatingChangePlace} />
            </S.RatingBox>
            <S.TitleText>작가 평점</S.TitleText>
            <S.RatingBox>
              <RatingStar onRatingChange={handleRatingChangeAuthor} />
            </S.RatingBox>
          </S.RatingContainer>
          <S.TitleText>내용</S.TitleText>
          <S.TextInputBox
            value={content}
            onChangeText={setContent}
            placeholder=""
            multiline={true}
            numberOfLines={6}
            textAlignVertical="top" // 텍스트 위쪽 정렬
          />

          <ScrollView showsHorizontalScrollIndicator={false}>
            <S.ImageBox>
              {images.map((image, index) => (
                <S.ImageReview key={index} source={{uri: image.uri}} />
              ))}
            </S.ImageBox>

            <S.BtnBox>
              <CalendarBtn text="갤러리에서 사진 선택" onPress={pickImage} />
            </S.BtnBox>
            <S.BtnBox>
              <LoginBtn
                disabled={isdisabled}
                onPress={handleSubmitAuthor}
                text={'리뷰 추가하기'}
              />
            </S.BtnBox>
          </ScrollView>
        </S.Container>
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
export default CreateReviewPage;
