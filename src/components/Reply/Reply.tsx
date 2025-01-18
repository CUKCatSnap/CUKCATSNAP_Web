//댓글 컴포넌트 입니다.
import React from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';

const Reply = ({reply}) => {
  const navigation = useNavigation();
  const handleReplyAgain = (reply, parentId) => {
    navigation.navigate('ReplyAgainPage', {reply, parentId}); // 대댓글 페이지로 이동
  };

  return (
    <SafeAreaView style={styles.container}>
      <S.ReplyPageContainer>
        <S.PostContainer>
          <S.PostBox>
            <S.Profile />
            <S.Nickname>Imsmart</S.Nickname>
          </S.PostBox>
          <S.PostText>{reply}</S.PostText>
          <S.Box>
            <S.Time>1시간 전</S.Time>
            <S.ReplyPress>
              <S.ReplyAgain onPress={() => handleReplyAgain(reply, null)}>
                답글 달기
              </S.ReplyAgain>
            </S.ReplyPress>
            <S.Heart />
          </S.Box>
        </S.PostContainer>
      </S.ReplyPageContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default Reply;
