//다른 사람의 프로필을 보여주는 페이지 입니다.
//사용자가 작가의 프로필 페이지(소개 페이지)를 볼 수 있습니다.
import React from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import * as S from './Style';
import SmallPost from '../../components/Subscribe/SmallPost/SmallPost';
import SearchTag from '../../components/Search/SearchTag.tsx/SearchTag';

const AuthorProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              안녕하세요, 저는 어렸을 때 부터 사진을 찍어왔구요. 사진을 찍는
              것이 너무 즐겁습니다 ㅋㅋㅋㅋㅋ. 이곳은 작가가 자기소개를 쓰는
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
            <S.IntersectionChatting>
              <S.IntersectionText>채팅하기</S.IntersectionText>
            </S.IntersectionChatting>
            <S.IntersectionReserve>
              <S.IntersectionText>예약하기</S.IntersectionText>
            </S.IntersectionReserve>
            <S.IntersectionBlock>
              <S.IntersectionText>차단하기</S.IntersectionText>
            </S.IntersectionBlock>
          </S.IntersectionContainer>

          <SearchTag />
        </S.AuthorProfileContainer>
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

export default AuthorProfile;
