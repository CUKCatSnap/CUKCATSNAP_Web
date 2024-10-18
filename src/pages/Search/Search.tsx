//검색 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import Post from '../../components/Search/Post';

const Search = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Search</Text>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
