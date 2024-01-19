import { styled } from 'styled-components';

interface DeliveryInfoLiProps {
  isSelected: boolean;
}

export const DeliveryInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 16px;
`;

export const DeliveryInfoUl = styled.ul`
  display: flex;
  gap: 6px;
`;
export const DeliveryInfoLi = styled.li<DeliveryInfoLiProps>`
  width: 100%;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  color : ${({isSelected})=> isSelected ? `#69A1FF` : `#333`};   
  border: ${({isSelected})=> isSelected ? `0.5px solid #69A1FF` : `0.5px solid #b9bdc5`};   
`;
