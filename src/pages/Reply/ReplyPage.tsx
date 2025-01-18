//댓글 페이지 입니다.
import React, {useState} from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import Reply from '../../components/Reply/Reply';
import * as S from './Style';
import Arrow from '../../icons/arrow.svg';
import {addReply} from '../../store/slices/replySlice';
import {useSelector, useDispatch} from 'react-redux';

const ReplyPage = ({route}) => {
  const {title} = route.params;
  const [reply, setReply] = useState(''); // 상태 추가
  const replies = useSelector(state => state.replies.items); // 리덕스 상태에서 댓글 목록 가져오기
  const dispatch = useDispatch(); // 리덕스 디스패치 함수
  const [parentId, setParentId] = useState('');
  const handleAddReply = () => {
    if (reply.trim()) {
      dispatch(
        addReply({
          id: Date.now(), // 고유 ID 생성 (예: 타임스탬프)
          text: reply, // 댓글 내용
          parentId: parentId, // 대댓글이면 부모 ID 지정, 기본값은 null
          replies: [], // 대댓글 리스트 (기본값은 빈 배열)
        }),
      );
      setReply(''); // 입력창 비우기
      setParentId(null); // 대댓글 작성 모드 해제
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
            <S.PostText>{title}</S.PostText>
            <S.Time>2시간 전</S.Time>
          </S.PostContainer>
          <S.ReplyContainer>
            <S.Line />
            <S.ReplyList>
              {/* 댓글 목록을 동적으로 렌더링 */}
              {replies.map((item, index) => (
                <S.ReplyPackage key={index}>
                  <Reply reply={item.text} />
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
            handleAddReply();
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
