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
const ReserveBox: React.FC<ReserveProps> = ({item, onDelete}) => {
  return (
    <S.Container>
      <S.RoundBox>
        <S.BoxText>{item.formatName}</S.BoxText>
        <S.TimeViewBox>
          <View style={{flex: 1}}>
            <S.TimeView>
              {item.startTimeList.map((startTime, index) => (
                <ReserveTime key={index} text={startTime} disabled={true} />
              ))}
            </S.TimeView>
          </View>
          <S.TimeBtn>
            <LoginBtn
              text="삭제하기"
              onPress={() => onDelete(item.reservationTimeFormatId)}
            />
          </S.TimeBtn>
        </S.TimeViewBox>
      </S.RoundBox>
    </S.Container>
  );
};

export default ReserveBox;
