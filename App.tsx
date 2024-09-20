/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//안드로이드에서 보이는 화면입니다.
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Chat from './src/icons/chat.svg';
import Test from './src/components/test';
import styled from 'styled-components/native';

const Red = styled(Text)`
  color: red;
`;

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>안드로이드에서 보이는 화면입니다.</Text>
      <Text>
        아이콘 테스트입니다.
        <Chat />
      </Text>
      <Text>
        <Red>스타일 컴포넌트 테스트 입니다.</Red>
      </Text>
      <Test />
    </SafeAreaView>
  );
}

export default App;
