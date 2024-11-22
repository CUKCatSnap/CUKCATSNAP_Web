//다른 사람의 프로필을 보여주는 페이지 입니다.
//사용자가 작가의 프로필 페이지(소개 페이지)를 볼 수 있습니다.
import React, {useState} from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import * as S from './Style';
import SearchTag from '../../Search/SearchTag.tsx/SearchTag';
import {useNavigation} from '@react-navigation/native';

const AuthorProfileComponent = () => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기
  const [isTouchOne, setIsTouchOne] = useState(false);
  const [isTouchTwo, setIsTouchTwo] = useState(true);
  const [isTouchThree, setIsTouchThree] = useState(false);
  // 작가 탭 항목 터치 시 항목 출력
  const handleChat = () => {
    Alert.alert('피드 편집 페이지');
    setIsTouchOne(prevState => !prevState); // 상태를 토글
  };

  const handleBlock = () => {
    setIsTouchThree(prevState => !prevState); // 상태를 토글
    Alert.alert('프로필 공유 페이지');
  };

  return (
    <SafeAreaView style={styles.container}>
      <S.AuthorProfileContainer>
        <S.ProfileContainer>
          <S.Profile />
          <S.ProfileTextBox>
            <S.AuthorNickName>Imsmart</S.AuthorNickName>
            <S.AuthorName>나 똘똘 작가</S.AuthorName>
            <S.ProfileBox>
              <S.AuthorScore>평점 4.8★</S.AuthorScore>
              <S.AuthorRecentReserve>최근 예약 5회</S.AuthorRecentReserve>
            </S.ProfileBox>
          </S.ProfileTextBox>
        </S.ProfileContainer>

        <S.ProfilePostBox>
          <S.AuthorFeedImage />
          <S.AuthorFeedProfile>
            안녕하세요, 저는 어렸을 때 부터 사진을 찍어왔구요. 사진을 찍는 것이
            너무 즐겁습니다 ㅋㅋㅋㅋㅋ. 이곳은 작가가 자기소개를 쓰는
            공간이에요. 아래처럼 사진을 넣을 수도 있습니다. 어쩌구 저쩌구 ㅋㅋ
          </S.AuthorFeedProfile>
        </S.ProfilePostBox>

        <S.ContentsBox>
          <S.Contents>공원 스냅</S.Contents>
          <S.Price>50,000원</S.Price>
        </S.ContentsBox>
        <S.ContentsBox>
          <S.Contents>우정 스냅</S.Contents>
          <S.Price>80,000원</S.Price>
        </S.ContentsBox>
        <S.ContentsBox>
          <S.Contents>가족 스냅</S.Contents>
          <S.Price>100,000원</S.Price>
        </S.ContentsBox>

        <S.IntersectionContainer>
          <S.Intersection
            onPress={handleChat}
            onPressIn={() => setIsTouchOne(prevState => !prevState)}
            isPress={isTouchOne}>
            <S.IntersectionText
              onPress={handleChat}
              onPressIn={() => setIsTouchOne(prevState => !prevState)}
              isPress={isTouchOne}>
              피드 편집
            </S.IntersectionText>
          </S.Intersection>

          <S.Intersection
            onPress={handleBlock}
            onPressIn={() => setIsTouchThree(prevState => !prevState)}
            isPress={isTouchThree}>
            <S.IntersectionText
              onPress={handleBlock}
              onPressIn={() => setIsTouchThree(prevState => !prevState)}
              isPress={isTouchThree}>
              프로필 공유
            </S.IntersectionText>
          </S.Intersection>
        </S.IntersectionContainer>
        {isTouchTwo && <SearchTag />}
      </S.AuthorProfileContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default AuthorProfileComponent;
