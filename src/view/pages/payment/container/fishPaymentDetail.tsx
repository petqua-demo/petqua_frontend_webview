import ProductInfo from '../../../../components/resources/payment/container/ProductInfo';
import PageHeader from '../../../../components/atoms/container/pageHeader';
import DeliveryAddressInfo from '../../../../components/resources/payment/container/DeliveryAddressInfo';
import * as s from '../styles/fishPaymentDetailStyle';
import DeliveryInfo from '../../../../components/resources/payment/container/DeliveryInfo';
import PaymentInfo from '../../../../components/resources/payment/container/PaymentInfo';
import PaymentSelectorInfo from '../../../../components/resources/payment/container/PaymentSelector';
const FishPaymentDetail = () => {
  return (
    <s.FishPaymentDetailContainer>
      <PageHeader title={'주문 / 결제'} />
      <s.FishPaymentDetailBody>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>배송지</s.FishPaymentDetailIndicatorSummary>
            <DeliveryAddressInfo />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>상품정보</s.FishPaymentDetailIndicatorSummary>
            <ProductInfo />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>배송정보</s.FishPaymentDetailIndicatorSummary>
            <DeliveryInfo />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>결제정보</s.FishPaymentDetailIndicatorSummary>

            <PaymentSelectorInfo />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>결제금액</s.FishPaymentDetailIndicatorSummary>
            <PaymentInfo />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
      </s.FishPaymentDetailBody>
      <s.FishPaymentSubmitButtonArea>
        <s.FishPaymentDetailSubmitButton>결제하기</s.FishPaymentDetailSubmitButton>
      </s.FishPaymentSubmitButtonArea>
    </s.FishPaymentDetailContainer>
  );
};

export default FishPaymentDetail;
