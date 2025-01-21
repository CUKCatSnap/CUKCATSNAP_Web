import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import Reply from '../../../components/Reply/Reply';
import * as S from './Style';
import Arrow from '../../../icons/arrow.svg';
import {addSubReply} from '../../../store/slices/replySlice';
import {useSelector, useDispatch} from 'react-redux';

const ReplyAgainPage = ({route}) => {
  const {reply, Id} = route.params; // 부모 댓글 정보와 ID
  const [replyAgain, setReplyAgain] = useState(''); // 대댓글 상태
  const replies = useSelector(state => state.replies.items); // 리덕스 상태에서 댓글 목록 가져오기
  const dispatch = useDispatch(); // 리덕스 디스패치 함수

  const handleAddReply = () => {
    if (replyAgain.trim()) {
      const newReply = {
        id: Date.now(), // 대댓글 ID
        text: replyAgain, // 대댓글 내용
        replies: [], // 대댓글 초기값 (빈 배열)
      };

      dispatch(
        addSubReply({
          parentId: Id, // 부모 댓글 ID
          reply: newReply, // 대댓글 내용
        }),
      );

      console.log('전체 댓글 목록:', replies); // 전체 댓글 목록을 출력하여 상태 확인
      setReplyAgain(''); // 입력창 비우기
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'답글 달기'} />
        <Reply reply={reply} Id={Id} />
        <S.ReplyContainer>
          <S.ReplyList>
            {replies
              .filter(item => item.id === Id) // 부모 댓글 ID로 필터링
              .map(item => (
                <S.ReplyPackage key={item.id}>
                  {/* 대댓글만 렌더링 */}
                  <S.ReplyAgain>
                    {item.replies.map(subReply => (
                      <Reply
                        key={subReply.id}
                        reply={subReply.text}
                        Id={item.id} // 부모 댓글의 ID 전달
                      />
                    ))}
                  </S.ReplyAgain>
                </S.ReplyPackage>
              ))}
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
