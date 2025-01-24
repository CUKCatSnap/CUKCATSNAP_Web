//작가는 자신의 예약 상태를 변경하는 페이지 입니다.
//사용자는 자신의 예약 내역을 확인하고, 예약 리뷰 버튼이 있는 페이지 입니다.
import React from 'react';
import {
  SafeAreaView,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import ReserveAuthorBox from '../../components/Reserve/ReserveComponent/ReserveAuthorBox/ReserveAuthorBox';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ReserveUserBox from '../../components/Reserve/ReserveComponent/ReserveUserBox/ReserveUserBox';

const ReserveState = ({route}) => {
  const {item} = route.params; // 전달된 item을 받기

  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const isUser = useSelector(state => state.auth.user);
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const handleReview = () => {
    navigation.navigate('CreateReviewPage', {
      reservationId: item.reservationId,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isAuthor ? (
          <View>
            <ContentsHeader text={'예약 상태 변경하기'} />
            <Text>현재 예약 상태 : </Text>
            <Text>변경할 예약 상태 : </Text>
          </View>
        ) : (
          <View>
            <ContentsHeader text={'예약 확인'} />
            <Text>내 예약을 확인합니다.</Text>
            <ReserveUserBox item={item} />
            <Button title={'리뷰하기'} onPress={handleReview} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default ReserveState;
