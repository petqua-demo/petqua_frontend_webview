import { styled } from 'styled-components';

export const FishPaymentDetailContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FishPaymentDetailBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 0 124px 0;
`;

export const FishPaymentDetailIndicator = styled.div`
  width: 100%;
  height: auto;
  padding: 0 16px 24px 16px;
  margin-bottom: 18px;
  border-bottom: 8px solid #f1f1f1;
`;

export const FishPaymentDetailIndicatorDetail = styled.details`
  width: 100%;
  color: var(--Main-Dark, #333);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  ::marker {
    font-size: 0;
  }
`;
export const FishPaymentDetailIndicatorSummary = styled.summary`
  width: 100%;
`;

export const FishPaymentSubmitButtonArea = styled.div`
  padding: 10px 16px;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 100px;
  background: var(--white, #fff);
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px 16px 0px 0px;
`;
export const FishPaymentDetailSubmitButton = styled.button`
  width: 100%;
  height: 60px;
  background: #004bca;
  border-radius: 5px;
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  margin-top: 12px;
  margin-bottom: 12px;
  cursor: pointer;
`;
