/// 웹에서 보이는 화면입니다.

import React from 'react';
import {SafeAreaView, Text} from 'react-native'; // Import necessary components
import {Chat} from '../src/icons/import';
import Test from './components/test';
import styled from 'styled-components';

const Red = styled.div`
  color: red;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>웹에서 보이는 화면입니다.</Text>
      <Text>
        아이콘 테스트입니다.
        <Chat />
      </Text>
      <Text>
        <Red>스타일 테스트 입니다.</Red>
      </Text>
      <Test />
    </SafeAreaView>
  );
};

export default App;
