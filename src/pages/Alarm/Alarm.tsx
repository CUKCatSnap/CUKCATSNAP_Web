//알림 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import AlarmBox from '../../components/Alarm/AlarmBox';
import * as S from './Style';
const Alarm = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContentsHeader text="알림" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.AlarmContainer>
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
          <AlarmBox />
        </S.AlarmContainer>
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

export default Alarm;
