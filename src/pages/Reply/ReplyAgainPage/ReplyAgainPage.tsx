import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import Reply from '../../../components/Reply/Reply';
import * as S from './Style';
import Arrow from '../../../icons/arrow.svg';
import {addReply} from '../../../store/slices/replySlice';
import {useSelector, useDispatch} from 'react-redux';

const ReplyAgainPage = ({route}) => {
  const {reply, parentId} = route.params; // 부모 댓글 정보와 ID
  const [replyAgain, setReplyAgain] = useState(''); // 대댓글 상태
  const replies = useSelector(state => state.replies.items); // 리덕스 상태에서 댓글 목록 가져오기
  const dispatch = useDispatch(); // 리덕스 디스패치 함수

  const handleAddReply = () => {
    if (replyAgain.trim()) {
      dispatch(
        addReply({
          id: Date.now(), // 고유 ID 생성
          text: replyAgain, // 대댓글 내용
          parentId: parentId, // 부모 댓글의 ID
          replies: [], // 대댓글 초기값
        }),
      );
      setReplyAgain(''); // 입력창 비우기
    }
  };

  const renderReplies = replies => {
    return replies.map(item => (
      <S.ReplyPackage key={item.id}>
        <Reply
          reply={item.text} // 댓글 내용 표시
          onReplyPress={() => {
            console.log('대댓글 추가 버튼 클릭'); // 필요한 경우 콜백 추가
          }}
        />
        {/* 대댓글 재귀 렌더링 */}
        {item.replies.length > 0 && renderReplies(item.replies)}
      </S.ReplyPackage>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'답글 달기'} />
        <Reply reply={reply} />
        <S.ReplyContainer>
          <S.ReplyList>
            {/* 부모 댓글의 대댓글 목록을 동적으로 렌더링 */}
            {replies
              .filter(item => item.id === parentId) // 부모 댓글 ID로 필터링
              .map(parentReply => renderReplies(parentReply.replies))}
          </S.ReplyList>
        </S.ReplyContainer>
      </ScrollView>
      <S.ReplyInputBox>
        <S.ReplyInput
          placeholder="답글 입력"
          keyboardType="default"
          value={replyAgain}
          onChangeText={setReplyAgain}
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

export default ReplyAgainPage;
