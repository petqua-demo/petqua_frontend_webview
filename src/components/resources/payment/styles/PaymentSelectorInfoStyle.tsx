import { styled } from 'styled-components';

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
export const PaymentSelectorInfoLi = styled.li`
  width: auto;
  min-width: 30%;
  height: 42px;
  line-height: 42px;
  color: var(--gray-2, #4d4d4d);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.7px;
  white-space: pre;
  border: 0.5px solid #b9bdc5;
  border-radius: 6px;
  flex-grow: 1;
  &.selected {
    border: 1px solid #333;
  }
`;
