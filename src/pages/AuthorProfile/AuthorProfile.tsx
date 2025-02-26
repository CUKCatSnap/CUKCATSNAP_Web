//다른 사람의 프로필을 보여주는 페이지 입니다.
//사용자가 작가의 프로필 페이지(소개 페이지)를 볼 수 있습니다.(사용자->작가)
import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  View,
} from 'react-native';
import * as S from './Style';
import SearchTag from '../../components/Search/SearchTag.tsx/SearchTag';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import {fetchPrograms} from '../../apis/ReserveProgram/getPrograms';
import {fetchReserveGuide} from '../../apis/ReserveProgram/getReserveGuide';

const AuthorProfile = () => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기
  const [isTouchOne, setIsTouchOne] = useState(false);
  const [isTouchTwo, setIsTouchTwo] = useState(false);
  const [isTouchThree, setIsTouchThree] = useState(false);
  const [programs, setPrograms] = useState([]); // 프로그램 데이터를 저장할 상태
  const [guide, setGuide] = useState(null); // 객체로 상태를 저장

  const handleChat = () => {
    navigation.navigate('Chat');
    setIsTouchOne(prevState => !prevState); // 상태를 토글
  };

  const handleReview = () => {
    setIsTouchTwo(prevState => !prevState); // 상태를 토글
    navigation.navigate('CreateReviewPage');
  };

  const handleBlock = () => {
    setIsTouchThree(prevState => !prevState); // 상태를 토글
    Alert.alert('작가를 차단하였습니다.');
  };

  //현재 작가 아이디는 하드코딩된 상황, 이후 api 추가시 고칠 것
  const photographerId = 2;

  const handleProgram = (
    programId: Number,
    title: string,
    price: Number,
    content: string,
  ) => {
    navigation.navigate('ReserveProgramPage', {
      programId,
      title,
      price,
      content,
      photographerId,
    });
  };

  // API 호출로 프로그램 데이터 가져오기
  const loadPrograms = async () => {
    try {
      const response = await fetchPrograms(photographerId);
      setPrograms(response.data.photographerProgramList);
    } catch (error) {
      console.error('프로그램 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  // API 호출로 장소와 주의사항 데이터 가져오기
  const loadGuide = async () => {
    try {
      const response2 = await fetchReserveGuide(photographerId);
      setGuide(response2.data);
    } catch (error) {
      console.error('가이드 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    loadPrograms();
    loadGuide();
  }, [photographerId]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'작가 정보'} />
        <S.AuthorProfileContainer>
          <S.ProfileContainer>
            <S.ProfileEmpty
              source={require('../../images/sample_profile.png')}
            />
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
            <S.AuthorFeedImage source={require('../../images/sample3.png')} />
            <S.AuthorFeedProfile>
              안녕하세요, 저는 어렸을 때 부터 사진을 찍어왔구요. 사진을 찍는
              것이 너무 즐겁습니다 ㅋㅋㅋㅋㅋ. 이곳은 작가가 자기소개를 쓰는
              공간이에요. 아래처럼 사진을 넣을 수도 있습니다. 어쩌구 저쩌구 ㅋㅋ
            </S.AuthorFeedProfile>
          </S.ProfilePostBox>

          {/* 프로그램 리스트 렌더링 */}
          {programs.length === 0 ? (
            <S.ContentsBoxContainer>
              <S.ContentsAreaText2>예약 프로그램</S.ContentsAreaText2>
              <S.Line2 />
              <S.ProgramView>
                <S.ProgramText>등록된 프로그램이 없습니다.</S.ProgramText>
              </S.ProgramView>
            </S.ContentsBoxContainer>
          ) : (
            <View>
              <S.ContentsBoxContainer>
                <S.ContentsAreaText2>예약 프로그램 목록</S.ContentsAreaText2>
                <S.Line2 />
                {programs.map(program => (
                  <S.ContentsBox
                    key={program.programId}
                    onPress={() =>
                      handleProgram(
                        program.programId,
                        program.title,
                        program.price,
                        program.content,
                      )
                    }>
                    <S.Contents numberOfLines={1}>{program.title}</S.Contents>
                    <S.Price>{program.price}원</S.Price>
                  </S.ContentsBox>
                ))}
              </S.ContentsBoxContainer>
            </View>
          )}

          {!guide ? (
            <View>
              <S.ProgramView>
                <S.ProgramText>등록된 정보가 없습니다.</S.ProgramText>
              </S.ProgramView>
            </View>
          ) : (
            <View>
              {!guide.photographerLocation ? (
                <S.ContentsAreaBox>
                  <S.ContentsAreaText>장소</S.ContentsAreaText>

                  <S.Line />
                  <S.Box>
                    <S.ProgramView>
                      <S.ProgramText>등록된 장소가 없습니다.</S.ProgramText>
                    </S.ProgramView>
                  </S.Box>
                </S.ContentsAreaBox>
              ) : (
                <S.ContentsAreaBox>
                  <S.ContentsAreaText>장소</S.ContentsAreaText>
                  <S.Line />
                  <S.Box>
                    <S.ContentsAreaText3>
                      {guide.photographerLocation}
                    </S.ContentsAreaText3>
                  </S.Box>
                </S.ContentsAreaBox>
              )}
              {!guide.photographerNotification ? (
                <S.ContentsAreaBox>
                  <S.ContentsAreaText>주의사항</S.ContentsAreaText>
                  <S.Line />
                  <S.Box>
                    <S.ProgramView>
                      <S.ProgramText>등록된 주의사항이 없습니다.</S.ProgramText>
                    </S.ProgramView>
                  </S.Box>
                </S.ContentsAreaBox>
              ) : (
                <S.ContentsAreaBox>
                  <S.ContentsAreaText>주의사항</S.ContentsAreaText>

                  <S.Line />
                  <S.Box>
                    <S.ContentsAreaText3>
                      {guide.photographerNotification}
                    </S.ContentsAreaText3>
                  </S.Box>
                </S.ContentsAreaBox>
              )}
            </View>
          )}

          <S.IntersectionContainer>
            <S.Intersection
              onPress={handleChat}
              onPressIn={() => setIsTouchOne(prevState => !prevState)}
              isPress={isTouchOne}>
              <S.IntersectionText
                onPress={handleChat}
                onPressIn={() => setIsTouchOne(prevState => !prevState)}
                isPress={isTouchOne}>
                채팅하기
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
                차단하기
              </S.IntersectionText>
            </S.Intersection>
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
