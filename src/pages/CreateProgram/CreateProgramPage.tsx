//작가의 예약 프로그램을 만들 수 있는 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import {createReservation} from '../../apis/ReserveProgram/postReserveProgram';
import {fetchReservationPrograms} from '../../apis/ReserveProgram/getReserveProgram';
import LoginBtn from '../../components/Login/LoginBtn';
import {useNavigation} from '@react-navigation/native';

const ReserveProgram = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(60);
  const [isdisabled, setDisabled] = useState(true);
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const handleSubmitAuthor = async () => {
    navigation.navigate('Mypage');
    const reservationData = {
      title,
      content,
      price: Number(price), // Ensure price is a number
      durationMinutes: Number(durationMinutes), // Ensure durationMinutes is a number
    };

    const result = await createReservation(reservationData);
    if (result) {
      fetchReservationPrograms();
      Alert.alert('예약 프로그램이 성공적으로 생성되었습니다.');
    } else {
      Alert.alert('예약 프로그램 생성에 실패했습니다.');
    }
  };

  //프로그램 추가 버튼 활성화
  useEffect(() => {
    if (!title || !content || !price) {
      setDisabled(true); // 입력이 모두 있을 경우 버튼 활성화
    } else {
      setDisabled(false);
    }
  }, [title, content, price]);

  return (
    <SafeAreaView>
      <ContentsHeader text={'프로그램 생성'} />
      <Text>
        예약 프로그램을 생성할 수 있습니다. 이곳은 예약 프로그램을 생성해
        추가합니다.
      </Text>
      <Text>타이틀</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="타이틀을 입력하세요"
      />
      <Text>내용</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="내용을 입력하세요"
      />
      <Text>가격</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="가격을 입력하세요"
        keyboardType="numeric"
      />
      <LoginBtn
        disabled={isdisabled}
        onPress={handleSubmitAuthor}
        text={'프로그램 추가하기'}
      />
    </SafeAreaView>
  );
};

export default ReserveProgram;
