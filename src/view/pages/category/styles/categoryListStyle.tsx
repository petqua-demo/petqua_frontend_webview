import { styled } from 'styled-components';

export const CategoryListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const CategoryListHeader = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 56px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  /* padding: 0 16px; */
  margin-bottom: 20px;
`;

export const CategoryListHeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const CategoryListBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 8px;
  div.item-wrap {
    width: 50%;
    /* padding: 0 16px; */
  }
`;

export const CategoryListBodyItem = styled.div`
  /* height: 56px; */
  line-height: 56px;
  background-color: #fff;
  /* padding: 0 16px; */
  margin-bottom: 24px;
`;

export const CategoryListItemImage = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  background-color: #ccc;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const CategoryListBodyItemTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const CategoryItemStoreName = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 4px;
  line-height: 14px;
  color: #828282;
  margin-bottom: 4px;
`;
export const CategoryItemName = styled.div`
  font-size: 17px;
  font-weight: 500;
  text-align: left;
  line-height: 17px;
  margin-bottom: 4px;
`;
export const CategoryItemOriginPrice = styled.div`
  text-align: left;
  text-decoration: line-through;
  color: #828282;
  line-height: 14px;
  font-size: 14px;
  margin-bottom: 4px;
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
  font-weight: 400;
  line-height: normal;
`;
export const CategoryItemSalePrice = styled.div`
  color: var(--Main-Dark, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 4px;
`;

export const CategoryFilterContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  line-height: 56px;
  background-color: #fff;
  /* padding: 0 16px; */
  margin-bottom: 20px;
  padding: 0 16px;
  margin-top: 16px;
`;

export const CategoryFilterItem = styled.div`
  width: auto;
  height: 100%;
  padding: 0 8px;
  color: var(--Main-Dark, #333);
  font-size: 12px;

  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  margin-left: 8px;
`;
