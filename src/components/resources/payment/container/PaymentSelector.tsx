import { useState } from 'react';
import * as s from '../styles/PaymentSelectorInfoStyle';

const PaymentList = [
  {
    name: '신용/체크카드',
    value: 'creditCard',
  },
  {
    name: '간편카드결제',
    value: 'simpleCard',
  },
  {
    name: '페이코',
    value: 'payco',
  },
  {
    name: '토스페이',
    value: 'tossPay',
  },
  {
    name: '카카오페이',
    value: 'kakaoPay',
  },
  {
    name: '네이버페이',
    value: 'naverPay',
  },
  {
    name: '휴대폰결제',
    value: 'mobilePay',
  },
  {
    name: '실시간 계좌이체',
    value: 'realTimeAccountTransfer',
  },
];

export const PaymentSelectorInfo = () => {
  const [payment, setPayment] = useState('creditCard');

  return (
    <s.PaymentSelectorInfoContainer>
      <s.PaymentSelectorInfoUl>
        {PaymentList.map((item, index) => (
          <s.PaymentSelectorInfoLi
            className={payment === item.value ? 'selected' : ''}
            onClick={() => setPayment(item.value)}
            key={item.value}
          >
            {item.name}
          </s.PaymentSelectorInfoLi>
        ))}
      </s.PaymentSelectorInfoUl>
    </s.PaymentSelectorInfoContainer>
  );
};

export default PaymentSelectorInfo;
