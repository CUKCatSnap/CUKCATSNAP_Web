//댓글 컴포넌트 입니다.
import React from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import * as S from './Style';
import {useNavigation, useRoute} from '@react-navigation/native';

const Reply = ({reply, Id}) => {
  const navigation = useNavigation();
  const handleReplyAgain = (reply, Id) => {
    navigation.navigate('ReplyAgainPage', {reply, Id}); // 대댓글 페이지로 이동
  };
  const route = useRoute(); // 현재 route 정보를 가져옴

  // ReplyAgainPage일 때 '답글 쓰기' 버튼 숨기기
  const isReplyAgainPage = route.name === 'ReplyAgainPage';

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
            {/* '답글 쓰기' 버튼이 ReplyAgainPage에서만 보이지 않도록 조건 추가 */}
            {!isReplyAgainPage && (
              <S.ReplyPress>
                <S.ReplyAgain onPress={() => handleReplyAgain(reply, Id)}>
                  답글 쓰기
                </S.ReplyAgain>
              </S.ReplyPress>
            )}
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
