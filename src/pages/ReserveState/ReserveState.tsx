//작가가 자신의 예약 상태를 변경하는 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'예약 상태 변경하기'} />
        <Text>예약 상태를 변경합니다.</Text>
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
