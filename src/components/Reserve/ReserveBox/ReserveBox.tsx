//예약 시간 컴포넌트 박스 입니다.
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import * as S from './Style';
import ReserveTime from '../ReserveTime/ReserveTime';
import LoginBtn from '../../Login/LoginBtn';
import {deleteAuthorTimeFormat} from '../../../apis/AuthorTimeFormat/deleteAuthorTimeFormat';

interface ReserveProps {
  item: {
    reservationTimeFormatId: string;
    formatName: string;
    startTimeList: string[];
  };
  onDelete: (id: string) => void;
}
//예약 시간 형식 삭제
const handleDelete = async (reservationTimeFormatId: string) => {
  console.log(reservationTimeFormatId);
  await deleteAuthorTimeFormat(reservationTimeFormatId);
};

const ReserveBox: React.FC<ReserveProps> = ({item}) => {
  return (
    <View key={item.reservationTimeFormatId}>
      <S.BoxText>{item.formatName}</S.BoxText>
      <S.TimeViewBox>
        <View style={{flex: 1}}>
          <S.TimeView>
            {/* startTimeList의 요소를 하나씩 분리해서 ReserveTime 컴포넌트로 전달 */}
            {item.startTimeList.map((startTime, index) => (
              <ReserveTime key={index} text={startTime} onPress={undefined} />
            ))}
          </S.TimeView>
        </View>
        <S.TimeBtn>
          <LoginBtn
            text="삭제하기"
            onPress={() => handleDelete(item.reservationTimeFormatId)}
          />
        </S.TimeBtn>
      </S.TimeViewBox>
      <S.LineBox>
        <S.Line />
      </S.LineBox>
    </View>
  );
};

export default ReserveBox;
