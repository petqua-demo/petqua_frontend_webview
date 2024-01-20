import { styled } from 'styled-components';

export const FishAdoptionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const FishAdoptionHeader = styled.div`
  width: 100%;
  height: 70px;
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: center; */
  /* align-items: center; */
  line-height: 56px;
  background-color: #fff;
  /* padding: 0 16px; */

  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

export const FishAdoptionPrice = styled.div`
  color: var(--Main-Dark, #333);
  padding: 24px 0 16px 0;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

export const FishAdoptionBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  /* flex-wrap: wrap; */
`;
export const FishAdoptionQuantity = styled.div`
  background-color: #fff;
  /* padding: 0 16px; */
  font-family: Pretendard;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
`;

export const FishAdoptionQuantitySelectorArea = styled.div`
  width: 140px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  border: 0.5px solid var(--main-gary, #b9bdc5);
`;

export const FishAdoptionQuantitySelectorButton = styled.div`
  width: 16px;
  height: 16px;
`;
export const FishAdoptionQuantitySelectorInput = styled.div``;

export const FishAdoptionButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 0;
  gap: 10px;
`;

export const FishAdoptionButton = styled.div<{ color?: string; border?: string; backgroundColor?: string }>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  border: 1px solid ${({ border }) => border};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 56px;
  border-radius: 5px;
  cursor: pointer;
`;
