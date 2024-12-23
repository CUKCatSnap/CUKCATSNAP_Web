//채팅 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Chat</Text>
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
