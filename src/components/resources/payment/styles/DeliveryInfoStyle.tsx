import { styled } from 'styled-components';

export const DeliveryInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 16px;
`;

export const DeliveryInfoUl = styled.ul`
  display: flex;
  gap: 6px;
`;
export const DeliveryInfoLi = styled.li`
  width: 100%;
  height: 42px;
  line-height: 42px;
  color: var(#333);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  border: 0.5px solid #b9bdc5;
  &.selected {
    border: 1px solid #004bca;
    color: #004bca;
  }
`;
