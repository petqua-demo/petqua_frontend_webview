import { useState } from 'react';
import * as s from '../styles/DeliveryInfoStyle';

const DeliveryType = [
  {
    name: '직접픽업',
    value: 'pickup',
  },
  {
    name: '안전배송',
    value: 'safeDelivery',
  },
  {
    name: '일반배송',
    value: 'normalDelivery',
  },
];

export const DeliveryInfo = () => {
  const [deliveryType, setDeliveryType] = useState('safeDelivery');
  return (
    <s.DeliveryInfoContainer>
      <s.DeliveryInfoUl>
        {DeliveryType.map((item) => (
          <s.DeliveryInfoLi
            onClick={() => setDeliveryType(item.value)}
            className={item.value === deliveryType ? 'selected' : ''}
            key={item.value}
          >
            {item.name}
          </s.DeliveryInfoLi>
        ))}
      </s.DeliveryInfoUl>
    </s.DeliveryInfoContainer>
  );
};

export default DeliveryInfo;
