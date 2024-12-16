//작가의 마이페이지를 보여주는 컴포넌트
import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  View,
  Button,
} from 'react-native';
import * as S from './Style';
import SearchTag from '../../Search/SearchTag.tsx/SearchTag';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {fetchReservationPrograms} from '../../../apis/ReserveProgram/getReserveProgram';
import LoginBtn from '../../Login/LoginBtn';

const AuthorProfileComponent = () => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기
  const [isTouchOne, setIsTouchOne] = useState(false);
  const [isTouchTwo, setIsTouchTwo] = useState(false);

  const [programs, setPrograms] = useState([]); // 프로그램 데이터를 저장할 상태

  // 작가 탭 항목 터치 시 항목 출력
  const handleFeed = () => {
    Alert.alert('피드 편집 페이지');
    setIsTouchOne(prevState => !prevState); // 상태를 토글
  };

  const handleProfile = () => {
    setIsTouchTwo(prevState => !prevState); // 상태를 토글
    Alert.alert('프로필 공유 페이지');
  };

  const handleProgram = (programId: Number) => {
    navigation.navigate('ReserveProgramPage', {programId});
  };

  const handleCreateProgram = () => {
    navigation.navigate('CreateProgramPage');
  };

  // API 호출로 프로그램 데이터 가져오기
  const loadPrograms = async () => {
    try {
      const response = await fetchReservationPrograms();
      if (response?.data?.photographerProgramList) {
        setPrograms(response.data.photographerProgramList);
      } else {
        console.error('프로그램 데이터를 불러오지 못했습니다.');
      }
    } catch (error) {
      console.error('프로그램 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  // 페이지가 focus될 때마다 프로그램 데이터를 다시 로드
  //이렇게 해야 새로 만든 프로그램이 바로 업데이트가 된다

  useFocusEffect(
    useCallback(() => {
      loadPrograms();
    }, []),
  );

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

        {/* 프로그램 리스트 렌더링 */}
        {programs.length === 0 ? (
          <View>
            <S.ProgramView>
              <S.ProgramText>등록된 프로그램이 없습니다.</S.ProgramText>
            </S.ProgramView>
          </View>
        ) : (
          programs.map(program => (
            <S.ContentsBox
              key={program.programId}
              onPress={() => handleProgram(program.programId)}>
              <S.Contents>{program.title}</S.Contents>
              <S.Price>{program.price}원</S.Price>
            </S.ContentsBox>
          ))
        )}
        <LoginBtn
          disabled={false}
          onPress={handleCreateProgram}
          text={'프로그램 추가하기'}
        />

        <S.IntersectionContainer>
          <S.Intersection
            onPress={handleFeed}
            onPressIn={() => setIsTouchOne(prevState => !prevState)}
            isPress={isTouchOne}>
            <S.IntersectionText
              onPress={handleFeed}
              onPressIn={() => setIsTouchOne(prevState => !prevState)}
              isPress={isTouchOne}>
              피드 편집
            </S.IntersectionText>
          </S.Intersection>

          <S.Intersection
            onPress={handleProfile}
            onPressIn={() => setIsTouchTwo(prevState => !prevState)}
            isPress={isTouchTwo}>
            <S.IntersectionText
              onPress={handleProfile}
              onPressIn={() => setIsTouchTwo(prevState => !prevState)}
              isPress={isTouchTwo}>
              프로필 공유
            </S.IntersectionText>
          </S.Intersection>
        </S.IntersectionContainer>
        <SearchTag />
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
