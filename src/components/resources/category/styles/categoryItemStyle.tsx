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
  line-height: 56px;
  background-color: #fff;
  padding: 0 16px;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
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
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 4px;
`;
