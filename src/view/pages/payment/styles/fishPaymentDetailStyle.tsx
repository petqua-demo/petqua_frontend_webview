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

export const FishPaymentDetailIndicatorHeader = styled.div`
  display: flex;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`;

export const AddressHeaderDiv = styled.div`
  display: flex;
`;

export const UserName = styled.p`
  color: #333;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ChangeAddress = styled.p`
  color:  #69A1FF;
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: auto;
`;

export const PhoneNum = styled.p`
  color: #B9BDC5;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AddressText = styled.p`
  color: #333;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

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

export const DeliveryDropDown = styled.div`
  border: 0.5px solid #D9D9D9;
  background: #FFF;
  margin-top: 20px;
`;

export const DeliveryDropDownHeader = styled.div`
  color: #B9BDC5;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const DeliveryDropDownOption = styled.li`
  border-top: 0.5px solid #D9D9D9;
  background: #FFF;
  color: #4D4D4D;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px;
`;
