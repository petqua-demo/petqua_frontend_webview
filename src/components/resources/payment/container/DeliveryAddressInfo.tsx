import * as s from '../styles/DeliveryAddressInfoStyle';

const DeliveryAddressInfo = ({ openModal } : any) => {
  return (
    <s.DeliveryAddressInfoContainer>
      <s.DeliveryAddressInfoBox onClick={openModal}>
        <s.NoAddressText>배송지가 없습니다.</s.NoAddressText>
        <s.InputAddressText>배송지 입력하기</s.InputAddressText>
      </s.DeliveryAddressInfoBox>
    </s.DeliveryAddressInfoContainer>
  );
};

export default DeliveryAddressInfo;
