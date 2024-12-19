//캘린더 페이지 입니다.
import React from 'react';
import {SafeAreaView, View, Text, ScrollView, StyleSheet} from 'react-native';
import Calendar from '../../components/Calendar/Calendar';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import * as S from './Style';
import Title from '../../components/Home/Title/Title';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import CalendarBtn from '../../components/Calendar/CalendarBtn/CalendarBtn';

const MyCalendar = () => {
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const user = useSelector(state => state.auth.user);
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const handleTimeFormat = () => {
    navigation.navigate('AuthorTimeFormatPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ContentsHeader text={'캘린더'} />
        <S.CalendarHeader>
          <Title text={'내 예약'} />
        </S.CalendarHeader>
        <Calendar />
        <S.MyCalendar>
          {isAuthor ? (
            <S.CalendarContainer>
              <Text>작가입니다.</Text>
              <CalendarBtn
                text="내 예약 시간 형식"
                onPress={handleTimeFormat}
              />
            </S.CalendarContainer>
          ) : (
            <View>
              <Text>유저입니다.</Text>
            </View>
          )}
        </S.MyCalendar>
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

export default MyCalendar;
