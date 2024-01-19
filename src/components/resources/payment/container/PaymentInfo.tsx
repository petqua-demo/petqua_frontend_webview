import * as s from '../styles/PaymentInfoStyle';

function calculateValue(state: number): number {
  switch (state) {
    case 0:
      return 0;
    case 1:
      return 5000;
    case 2:
      return 3000;
    default:
      return 0; 
  }
}

export const PaymentInfo = ({ data }: any) => {
  return (
    <s.PaymentInfoContainer>
      <s.PaymentInfoTotalPrice>
        <s.PaymentInfoPriceTitle>총 입양 금액</s.PaymentInfoPriceTitle>
        <s.PaymentInfoPrice>{(data.salePrice * data.quantity).toLocaleString()} 원</s.PaymentInfoPrice>
      </s.PaymentInfoTotalPrice>
      <s.PaymentInfoDeliveryPrice>
        <s.PaymentInfoPriceTitle>운송비</s.PaymentInfoPriceTitle>
        <s.PaymentInfoPrice>{(calculateValue(data.delivery)).toLocaleString()} 원</s.PaymentInfoPrice>
      </s.PaymentInfoDeliveryPrice>
      <s.PaymentInfoTotalPriceBox>
        <s.TotalPriceTitle>최종 결제 금액</s.TotalPriceTitle>
        <s.TotalPrice>{(data.salePrice * data.quantity+calculateValue(data.delivery)).toLocaleString()} 원</s.TotalPrice>
      </s.PaymentInfoTotalPriceBox>
    </s.PaymentInfoContainer>
  );
};

export default PaymentInfo;
