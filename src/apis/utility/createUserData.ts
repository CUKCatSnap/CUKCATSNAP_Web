//유저 데이터 객체를 생성하는 함수

export const createUserData = (
  identifier,
  password,
  nickname,
  birthday,
  phoneNumber,
  isAgree,
) => {
  return {
    identifier,
    password,
    nickname,
    birthday,
    phoneNumber,
    termsAgreementList: [
      {
        termsId: 'TOS-001', // 약관 ID는 상황에 맞게 변경 가능
        isAgree,
      },
    ],
  };
};
