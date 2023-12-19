import * as s from '../styles/PaymentSelectorInfoStyle';

export const PaymentSelectorInfo = () => {
  return (
    <s.PaymentSelectorInfoContainer>
      <s.PaymentSelectorInfoUl>
        <s.PaymentSelectorInfoLi>신용/체크카드</s.PaymentSelectorInfoLi>
        <s.PaymentSelectorInfoLi>간편카드결제</s.PaymentSelectorInfoLi>
        <s.PaymentSelectorInfoLi>페이코</s.PaymentSelectorInfoLi>
        <s.PaymentSelectorInfoLi>토스페이</s.PaymentSelectorInfoLi>
        <s.PaymentSelectorInfoLi>카카오페이</s.PaymentSelectorInfoLi>
        <s.PaymentSelectorInfoLi>네이버페이</s.PaymentSelectorInfoLi>
        <s.PaymentSelectorInfoLi>휴대폰결제</s.PaymentSelectorInfoLi>
        <s.PaymentSelectorInfoLi>실시간 계좌이체</s.PaymentSelectorInfoLi>
      </s.PaymentSelectorInfoUl>
    </s.PaymentSelectorInfoContainer>
  );
};

export default PaymentSelectorInfo;
