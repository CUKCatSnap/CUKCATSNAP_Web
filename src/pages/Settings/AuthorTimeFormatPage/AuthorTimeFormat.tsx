//작가가 자신의 예약 시간 형식을 조회하는 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import {fetchTimeFormat} from '../../../apis/AuthorTimeFormat/getAuthorTimeFormat';
import CalendarBtn from '../../../components/Calendar/CalendarBtn/CalendarBtn';
import {useNavigation} from '@react-navigation/native';
import {deleteAuthorTimeFormat} from '../../../apis/AuthorTimeFormat/deleteAuthorTimeFormat';
import ReserveTime from '../../../components/Reserve/ReserveTime/ReserveTime';
import * as S from './Style';
import LoginBtn from '../../../components/Login/LoginBtn';
import ReserveBox from '../../../components/Reserve/ReserveBox/ReserveBox';

const AuthorTimeFormatPage = () => {
  const [timeFormatList, setTimeFormatList] = useState([]); // 목록 데이터를 저장할 상태
  const navigation = useNavigation();

  // API 호출로 설정 가져오기
  const loadTimeFormat = async () => {
    try {
      const response = await fetchTimeFormat();
      if (response && response.data) {
        setTimeFormatList(response.data.reservationTimeFormatList); // 목록 저장
      }
    } catch (error) {
      console.log('예약 알림을 불러오는 중 오류 발생: ' + error.message);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadTimeFormat(); // 화면이 포커스될 때 데이터 새로고침
    }, []),
  );
  const handleTimeFormat = () => {
    navigation.navigate('CreateAuthorTimeFormatPage');
  };

  //예약 시간 형식 삭제
  const handleDelete = async (reservationTimeFormatId: string) => {
    try {
      await deleteAuthorTimeFormat(reservationTimeFormatId); // 삭제 API 호출
      Alert.alert('삭제 완료', '예약 시간 형식을 삭제했습니다.');
      loadTimeFormat(); // 삭제 후 목록 새로고침
    } catch (error) {
      Alert.alert('삭제 실패', '삭제하는 중 오류가 발생했습니다.');
      console.error('삭제 오류:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {timeFormatList.length > 0 ? (
        <FlatList
          data={timeFormatList}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <ContentsHeader text="예약 시간 목록" />
            </>
          }
          ListFooterComponent={
            <>
              <S.TimeBtnView>
                <S.BtnView>
                  <CalendarBtn
                    text="예약 시간 생성하기"
                    onPress={handleTimeFormat}
                  />
                </S.BtnView>
              </S.TimeBtnView>
            </>
          }
          keyExtractor={item => item.reservationTimeFormatId}
          renderItem={({item}) => (
            <ReserveBox item={item} onDelete={handleDelete} />
          )} // RenderTimeFormatItem 호출
        />
      ) : (
        <View>
          <ContentsHeader text="예약 시간 목록" />
          <S.TimeTextView>
            <S.TimeText>생성된 예약 시간이 없습니다.</S.TimeText>
          </S.TimeTextView>
          <S.TimeBtnView>
            <S.BtnView>
              <CalendarBtn
                text="예약 시간 생성하기"
                onPress={handleTimeFormat}
              />
            </S.BtnView>
          </S.TimeBtnView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default AuthorTimeFormatPage;
