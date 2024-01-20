import { useState } from 'react';
import * as s from '../styles/DeliveryInfoStyle';

const delivery_array = ['직접픽업','안전배송','일반배송'];

export const DeliveryInfo = ({setDelivery} : any) => {
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const handleDeliveryClick = (deliveryType: any) => {
    // 선택 여부 css 반영
    setSelectedDelivery(deliveryType);
    // 부모 요소에 안전 운송비를 위해 전달
    setDelivery(deliveryType);
  };

  return (
    <s.DeliveryInfoContainer>
      <s.DeliveryInfoUl>
        {delivery_array.map((val, index)=> (
          <s.DeliveryInfoLi
            key={index}
            onClick={() => handleDeliveryClick(index)}
            isSelected={selectedDelivery === index}>{val}</s.DeliveryInfoLi>
          ))}       
      </s.DeliveryInfoUl>
    </s.DeliveryInfoContainer>
  );
};

export default DeliveryInfo;
