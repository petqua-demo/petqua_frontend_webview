import styled from 'styled-components';

export const CategoryListBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CategoryListBodyItem = styled.div`
  /* height: 56px; */
  width: 100%;
  line-height: 56px;
  background-color: #fff;
  /* padding: 0 16px; */
  margin-bottom: 24px;
  padding: 0 8px;
`;

export const CategoryListItemImage = styled.div`
  /* width: 160px; */
  /* height: 160px; */
  width: 100%;
  height: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  background-color: #D9E7FF;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryListBodyItemTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const CategoryItemStoreName = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: Pretendard;
  text-align: left;
  line-height: 14px;
  color: #B9BDC5;
  margin-bottom: 8px;
`;
export const CategoryItemName = styled.div`
  font-size: 17px;
  font-weight: 500;
  font-family: Pretendard;
  text-align: left;
  line-height: 17px;
  margin-bottom: 8px;
`;
export const CategoryItemOriginPrice = styled.div`
  text-align: left;
  text-decoration: line-through;
  color: #828282;
  line-height: 14px;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 400;
  margin-bottom: 8px;
`;
export const CategoryItemDiscountPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const CategoryItemDiscountRate = styled.div`
  text-align: left;
  margin-bottom: 4px;
  margin-right: 4px;
  color: #ff3131;
  font-size: 16px;
  font-style: normal;
  font-family: Pretendard;
  font-weight: 400;
  line-height: normal;
`;
export const CategoryItemSalePrice = styled.div`
  color: var(--Main-Dark, #333);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  font-family: Pretendard;
  line-height: normal;
  margin-bottom: 4px;
`;
