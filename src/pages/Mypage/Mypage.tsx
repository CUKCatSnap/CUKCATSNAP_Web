//내정보 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Mypage = () => {
  // Redux에서 상태 가져오기
  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const user = useSelector(state => state.auth.user);

  return (
    <SafeAreaView>
      {isAuthor ? <Text>작가의 Mypage</Text> : <Text>유저의 Mypage</Text>}
      {user ? (
        <Text>안녕하세요, {user.name}님!</Text>
      ) : (
        <Text>로그인 해주세요</Text>
      )}
    </SafeAreaView>
  );
};

export default Mypage;
