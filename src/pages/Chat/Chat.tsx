//채팅 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import * as S from './Style';
const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'채팅'} />
        <S.ReserveView>
          <S.ReserveText>아직 페이지가 구현되지 않았습니다.</S.ReserveText>
        </S.ReserveView>
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
export default Chat;
