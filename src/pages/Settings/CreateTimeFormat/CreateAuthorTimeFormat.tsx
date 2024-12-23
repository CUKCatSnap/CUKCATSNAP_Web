import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Alert,
  TextInput,
  StyleSheet,
} from 'react-native';
import CalendarBtn from '../../../components/Calendar/CalendarBtn/CalendarBtn';
import {useNavigation} from '@react-navigation/native';
import {postAuthorTimeFormat} from '../../../apis/AuthorTimeFormat/postAuthorTimeFormat';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import * as S from './Style';
import ReserveTime from '../../../components/Reserve/ReserveTime/ReserveTime'; // 시간 컴포넌트 추가
import {Picker} from '@react-native-picker/picker';
import LoginBtn from '../../../components/Login/LoginBtn';

const CreateAuthorTimeFormatPage = () => {
  const [formatName, setFormatName] = useState(''); // 예약 형식 이름
  const [startTimeList, setStartTimeList] = useState<string[]>([]); // 시간 리스트 (배열로 관리)
  const [selectedHour, setSelectedHour] = useState<string>('00'); // 선택된 시
  const [selectedMinute, setSelectedMinute] = useState<string>('00'); // 선택된 분
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 버튼 활성화 상태

  const navigation = useNavigation();

  // 등록 버튼 활성화
  useEffect(() => {
    if (formatName.trim() !== '' && startTimeList.length > 0) {
      setIsButtonDisabled(false); // 입력이 모두 있을 경우 버튼 활성화
    } else {
      setIsButtonDisabled(true); // 하나라도 없으면 버튼 비활성화
    }
  }, [formatName, startTimeList]);

  // 예약 시간 형식 등록 보내기 (post)
  const handleTimeTable = async () => {
    try {
      if (!isButtonDisabled) {
        const formattedTimes = startTimeList.map(time => time.trim()); // 배열 형태 유지
        const response = await postAuthorTimeFormat(formatName, formattedTimes);
        Alert.alert('예약 시간이 등록되었습니다.');
        navigation.goBack();
      }
    } catch (error) {
      console.log(
        '예약 시간 등록 실패',
        error.message || '알 수 없는 오류 발생',
      );
    }
  };

  // 시간 추가
  const addTimeToList = () => {
    const newTime = `${selectedHour}:${selectedMinute}`;
    setStartTimeList(prevList => {
      // 중복된 시간 확인
      const updatedList = prevList.filter(time => time !== newTime); // 중복된 시간을 제거
      return [...updatedList, newTime]; // 새로운 시간 추가
    });
  };
  // 시간 삭제
  const deleteTime = (timeToDelete: string) => {
    setStartTimeList(
      prevList => prevList.filter(time => time !== timeToDelete), // 클릭한 시간만 제외
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ContentsHeader text="예약 시간 등록하기" />
      <S.TimeViewContainer>
        <S.TimeText
          value={formatName}
          placeholder="예약명"
          keyboardType="default"
          onChangeText={setFormatName}
        />

        <S.TimeView>
          {/* 시 선택 드롭다운 */}
          <View>
            <S.TimeTextBox>시간</S.TimeTextBox>
            <S.PickerBox>
              <Picker
                selectedValue={selectedHour}
                onValueChange={itemValue => setSelectedHour(itemValue)}>
                {Array.from({length: 24}, (_, index) => {
                  const hour = String(index).padStart(2, '0');
                  return <Picker.Item key={hour} label={hour} value={hour} />;
                })}
              </Picker>
            </S.PickerBox>
          </View>

          {/* 분 선택 드롭다운 */}
          <View>
            <S.TimeTextBox>분</S.TimeTextBox>
            <S.PickerBox>
              <Picker
                selectedValue={selectedMinute}
                onValueChange={itemValue => setSelectedMinute(itemValue)}>
                {Array.from({length: 60}, (_, index) => {
                  const minute = String(index).padStart(2, '0');
                  return (
                    <Picker.Item key={minute} label={minute} value={minute} />
                  );
                })}
              </Picker>
            </S.PickerBox>
          </View>

          <CalendarBtn
            text="예약 시간 추가"
            onPress={() => {
              addTimeToList(); // 선택된 시간과 분을 추가
            }}
          />
        </S.TimeView>

        {/* 입력된 시간들을 ReserveTime 컴포넌트로 렌더링 */}

        <S.TimeBox>
          {startTimeList.map((time, index) => (
            <ReserveTime key={index} text={time} onPress={deleteTime} /> // 시간 입력 후 ReserveTime 컴포넌트로 표시
          ))}
        </S.TimeBox>

        <LoginBtn
          text="등록하기"
          onPress={handleTimeTable}
          disabled={isButtonDisabled}
        />
      </S.TimeViewContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default CreateAuthorTimeFormatPage;
