//댓글 페이지 입니다.
import React, {useState} from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import Reply from '../../components/Reply/Reply';
import * as S from './Style';
import Arrow from '../../icons/arrow.svg';

const ReplyPage = () => {
  const [reply, setReply] = useState(''); // 상태 추가
  const [replies, setReplies] = useState([]); // 댓글 목록 상태

  // 댓글 추가 함수
  const addReply = () => {
    if (reply.trim()) {
      setReplies([...replies, reply]); // 새로운 댓글을 추가
      setReply(''); // 입력창 비우기
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text="댓글" />
        <S.ReplyPageContainer>
          <S.PostContainer>
            <S.PostBox>
              <S.Profile />
              <S.Nickname>Imsmart</S.Nickname>
              <S.Score>평점 4.8★</S.Score>
            </S.PostBox>
            <S.Date>2024/9/20 18:00</S.Date>
            <S.PostText>
              아래 사진은 제가 올림픽공원에서 찍은 사진인데요. 모델이 있으면 더
              예쁘게 나올 것 같아요. 제 이름을 클릭하시면 저에 대한 상세
              페이지를 보실 수 있습니다 ~~~~~~
            </S.PostText>
            <S.Time>2시간 전</S.Time>
          </S.PostContainer>
          <S.ReplyContainer>
            <S.Line />
            <S.ReplyList>
              {/* 댓글 목록을 동적으로 렌더링 */}
              {replies.map((item, index) => (
                <S.ReplyPackage key={index}>
                  <Reply content={item} />
                </S.ReplyPackage>
              ))}
            </S.ReplyList>
          </S.ReplyContainer>
        </S.ReplyPageContainer>
      </ScrollView>
      <S.ReplyInputBox>
        <S.ReplyInput
          placeholder="댓글 입력"
          keyboardType="default"
          value={reply}
          onChangeText={setReply}
          multiline={true} // 여러 줄 입력을 활성화
          numberOfLines={6} // 기본 높이 설정
          blurOnSubmit={false} // 엔터 입력 시 TextInput이 비활성화되지 않도록 설정
          textAlignVertical="top" // 텍스트 위쪽 정렬
        />
        <S.ProfileReply />
        <S.SvgBox
          onPress={() => {
            addReply(); // 엔터 키로 댓글 추가
          }}>
          <Arrow />
        </S.SvgBox>
      </S.ReplyInputBox>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default ReplyPage;
