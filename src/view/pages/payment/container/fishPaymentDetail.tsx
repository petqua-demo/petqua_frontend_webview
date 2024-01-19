import ProductInfo from '../../../../components/resources/payment/container/ProductInfo';
import PageHeader from '../../../../components/atoms/container/pageHeader';
import DeliveryAddressInfo from '../../../../components/resources/payment/container/DeliveryAddressInfo';
import * as s from '../styles/fishPaymentDetailStyle';
import DeliveryInfo from '../../../../components/resources/payment/container/DeliveryInfo';
import PaymentInfo from '../../../../components/resources/payment/container/PaymentInfo';
import PaymentSelectorInfo from '../../../../components/resources/payment/container/PaymentSelector';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import DeliveryModal from './DeliveryModal';

const FishPaymentDetail = () => {
  const location = useLocation();
  const data = location.state;
  const [delivery, setDelivery] = useState(0);
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
            <ProductInfo data={data} />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>배송정보</s.FishPaymentDetailIndicatorSummary>
            <DeliveryInfo setDelivery={setDelivery}/>
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
            <PaymentInfo data={{ ...data, delivery }} />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
      </s.FishPaymentDetailBody>
      <s.FishPaymentSubmitButtonArea>
        <s.FishPaymentDetailSubmitButton>결제하기</s.FishPaymentDetailSubmitButton>
      </s.FishPaymentSubmitButtonArea>
      <DeliveryModal isOpen={isModalOpen} onRequestClose={closeModal}/>
    </s.FishPaymentDetailContainer>
  );
};

export default FishPaymentDetail;
