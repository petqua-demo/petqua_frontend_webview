import * as s from '../styles/DeliveryInfoStyle';

export const DeliveryInfo = () => {
  return (
    <s.DeliveryInfoContainer>
      <s.DeliveryInfoUl>
        <s.DeliveryInfoLi>직접픽업</s.DeliveryInfoLi>
        <s.DeliveryInfoLi>안전배송</s.DeliveryInfoLi>
        <s.DeliveryInfoLi>일반배송</s.DeliveryInfoLi>
      </s.DeliveryInfoUl>
    </s.DeliveryInfoContainer>
  );
};

export default DeliveryInfo;
