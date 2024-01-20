import { styled } from 'styled-components';

export const ProductInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 6px;
`;

export const ProductInfoUl = styled.ul``;
export const ProcutInfoLi = styled.li`
  width: 100%;
  height: 124px;
  padding: 12px 0;
  display: flex;
  gap: 12px;
`;
export const ProductInfoImgArea = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  background: var(--gray3, #f1f1f1);
  flex-shrink: 0;
  img {
    width : 100%;
    height: 100%;
    background-size: contain;
  }
`;
export const ProductInfoArea = styled.div`
  width: 100%;
`;
export const ProductInfoCompany = styled.div`
  color: var(--main-gary, #b9bdc5);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 4px;
`;
export const ProductInfoName = styled.div`
  color: var(--Main-Dark, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;
export const ProductInfoQuantity = styled.div`
  color: var(--main-gary, #b9bdc5);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const ProductInfoBottomArea = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductInfoChip = styled.div`
  height: 22px;
  color: var(--main-gary, #b9bdc5);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;
  line-height: 22px;
  padding: 0 6px;
  border: 0.5px solid var(--main-gary, #b9bdc5);
`;
export const ProductInfoPrice = styled.div``;
