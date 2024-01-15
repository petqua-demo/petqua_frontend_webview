import * as s from '../styles/PaymentInfoStyle';

export const PaymentInfo = ({ data }: any) => {
  const { quantity, price, productName, productId } = data;
  return (
    <s.PaymentInfoContainer>
      <s.PaymentInfoTotalPrice>
        <s.PaymentInfoPriceTitle>총 입양 금액</s.PaymentInfoPriceTitle>
        <s.PaymentInfoPrice>{price.toLocaleString()} 원</s.PaymentInfoPrice>
      </s.PaymentInfoTotalPrice>

      <s.PaymentInfoDeliveryPrice>
        <s.PaymentInfoPriceTitle>배송비</s.PaymentInfoPriceTitle>
        <s.PaymentInfoPrice>{(0).toLocaleString()} 원</s.PaymentInfoPrice>
      </s.PaymentInfoDeliveryPrice>
      <s.PaymentInfoDiscountPrice>
        <s.PaymentInfoPriceTitle>할인 금액</s.PaymentInfoPriceTitle>
        <s.PaymentInfoPrice>{(0).toLocaleString()} 원</s.PaymentInfoPrice>
      </s.PaymentInfoDiscountPrice>
      <s.PaymentInfoTotalPriceBox>
        <s.TotalPriceTitle>최종 결제 금액</s.TotalPriceTitle>
        <s.TotalPrice>{price.toLocaleString()} 원</s.TotalPrice>
      </s.PaymentInfoTotalPriceBox>
    </s.PaymentInfoContainer>
  );
};

export default PaymentInfo;
