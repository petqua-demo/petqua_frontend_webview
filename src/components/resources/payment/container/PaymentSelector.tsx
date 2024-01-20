import { useState } from 'react';
import * as s from '../styles/PaymentSelectorInfoStyle';

const payment_array = ['신용/체크카드','간편카드결제','페이코','토스페이','카카오페이','네이버페이','휴대폰결제','실시간 계좌이체'];

export const PaymentSelectorInfo = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentClick = (paymentType: any) => {
    // 선택 여부 css 반영
    setSelectedPayment(paymentType);
  };
  return (
    <s.PaymentSelectorInfoContainer>
      <s.PaymentSelectorInfoUl>
        {payment_array.map((val, index)=> (
          <s.PaymentSelectorInfoLi
            key={index}
            onClick={() => handlePaymentClick(index)}
            isSelected={selectedPayment === index}>{val}</s.PaymentSelectorInfoLi>
          ))}       
      </s.PaymentSelectorInfoUl>
    </s.PaymentSelectorInfoContainer>
  );
};

export default PaymentSelectorInfo;
