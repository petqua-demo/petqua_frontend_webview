import { styled } from 'styled-components';

export const DeliveryAddressInfoContainer = styled.div`
  width: 100%;
  height: 156px;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-top: 6px;
`;

export const DeliveryAddressInfoBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  opacity: 0.5;
  background: var(--blue-3, #ecf3ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DeliveryPostCode = styled.div`
  width: 100%;
  min-height: max(80vh, calc(444px - 70px));
  max-height: 80vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
