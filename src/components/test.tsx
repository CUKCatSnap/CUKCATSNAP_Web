//테스트 컴포넌트
import React from 'react';
import {SafeAreaView, Text} from 'react-native'; // Import necessary components
//웹에서 svg 불러오기
//import {Chat} from '../icons/import';
//안드로이드 불러오기
//import Chat from '../icons/chat.svg';

import styled from 'styled-components';

const Red = styled(Text)`
  color: red;
`;

const Test = () => {
  return (
    <SafeAreaView>
      <Text>
        <Red>컴포넌트 테스트 입니다.</Red>
      </Text>
    </SafeAreaView>
  );
};

export default Test;
