import { styled } from 'styled-components';

interface PaymentSelectorInfoLiProps {
  isSelected: boolean;
}

export const PaymentSelectorInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 16px;
`;

export const PaymentSelectorInfoUl = styled.ul`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;
export const PaymentSelectorInfoLi = styled.li<PaymentSelectorInfoLiProps>`
  width: auto;
  min-width: 30%;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.7px;
  white-space: pre;
  border-radius: 6px;
  flex-grow: 1;
  color : ${({isSelected})=> isSelected ? `#69A1FF` : `#333`};   
  border: ${({isSelected})=> isSelected ? `0.5px solid #69A1FF` : `0.5px solid #b9bdc5`};   
`;
