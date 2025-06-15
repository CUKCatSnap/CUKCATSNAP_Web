//선택한 작가의 프로필을 보여주는 페이지 입니다.
//검색 페이지의 리뷰 또는 피드 페이지에서 이름을 클릭하면 나타납니다.
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
import SearchTag from '../../../components/Search/SearchTag.tsx/SearchTag';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import {fetchPrograms} from '../../../apis/ReserveProgram/getPrograms';
import {fetchReserveGuide} from '../../../apis/ReserveProgram/getReserveGuide';
import {fetchAuthorProfileDetail} from '../../../apis/Information/getAuthorProfileDetail';
import Introduction from '../../../components/Profile/Introduction/Introduction';

const AuthorProfileDetailPage = () => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기
  const [isTouchOne, setIsTouchOne] = useState(false);
  const [isTouchTwo, setIsTouchTwo] = useState(false);
  const [isTouchThree, setIsTouchThree] = useState(false);
  const [programs, setPrograms] = useState([]); // 프로그램 데이터를 저장할 상태
  const [guide, setGuide] = useState(null); // 객체로 상태를 저장
  const [profile, setProfile] = useState(null); // 프로필 데이터를 저장할 상태

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

  //API 호출로 프로필 정보 가져오기
  const loadProfile = async () => {
    try {
      const responseProfile = await fetchAuthorProfileDetail(photographerId);
      setProfile(responseProfile.data);
    } catch (error) {
      console.error('프로필 데이터를 불러오는 중 오류 발생:', error);
    }
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

  //

  useEffect(() => {
    loadProfile();
    loadPrograms();
    loadGuide();
  }, [photographerId]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'작가 정보'} />
        <S.AuthorProfileContainer>
          {profile && (
            <S.ProfileContainer>
              <S.ProfileEmpty
                source={
                  profile && profile.profilePhotoUrl
                    ? {uri: profile.profilePhotoUrl}
                    : require('../../../images/sample_profile.png')
                }
              />
              <S.ProfileTextBox>
                <S.AuthorNickName>
                  {profile ? profile.nickname : '작가 닉네임'} 작가
                </S.AuthorNickName>
                <S.ProfileBox>
                  <S.AuthorScore>
                    {`평점 ${profile.photographerRating}★`}
                  </S.AuthorScore>
                  <S.AuthorRecentReserve>
                    {`최근 예약 ${profile.recentReservation}회`}
                  </S.AuthorRecentReserve>
                </S.ProfileBox>
              </S.ProfileTextBox>
            </S.ProfileContainer>
          )}

          <Introduction photographerId={photographerId} />

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
          <SearchTag photographerId={photographerId} />
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
export default AuthorProfileDetailPage;
