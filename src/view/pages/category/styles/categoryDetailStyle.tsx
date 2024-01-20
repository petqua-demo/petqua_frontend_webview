import { styled } from 'styled-components';

export const CategoryDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const CategoryDetailImageContainer = styled.div`
  width: 100%;
  min-height: 360px;
  background-color: #D9E7FF;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const CategoryDetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const CategeoryDetailInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

export const CategoryStoreName = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
  line-height: 14px;
  color: #B9BDC5;
`;

export const CategoryDetailInfoTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  font-family: Pretendard;
  line-height: 18px;
  margin-bottom: 12px;
`;

export const CategoryDetailCategory = styled.div`
  font-family: Pretendard;
  color: #4D4D4D;
  line-height: 12px;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const CategoryDetailOriginPrice = styled.div`
  text-align: left;
  text-decoration: line-through;
  color: #B9BDC5;
  font-family: Pretendard;
  line-height: 16px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
`;

export const CategoryDetailDiscountPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
  margin-bottom: 8px;
`;

export const CategoryDetailDiscountPrice = styled.div`
  color: var(--Main-Dark, #333);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CategoryDetailDiscountRate = styled.div`
  color: #ff3131;
  font-family: Pretendard;
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CategoryDetailSalePrice = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  line-height: normal;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const CategoryDetailDescriptionContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e0e0e0;
  padding-top: 24px;
  margin-bottom: 24px;
`;

export const CategoryDetailDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
  margin-bottom: 4px;
  white-space: pre-wrap;
`;

export const CategoryDetailButtomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e0e0e0;
  height: 100px;
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  z-index: 999;
  border-radius: 16px 16px 0 0;
`;
export const HeartButtonContainer = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: flex-end; */
  align-items: center;
  p {
    color: var(--gray-2, #4d4d4d);
    text-align: center;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;
export const CategoryDetailBottomButton = styled.div`
  width: 100%;
  height: 56px;
  background-color: #004bca;
  border-radius: 16px;
  margin: 24px 0 24px 24px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryDetailProductInfoContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;
export const CategoryDetailProductInfoTitle = styled.div`
  color: var(--gray-2, #4d4d4d);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 24px;
  margin-bottom: 20px;
`;
export const CategoryDetailProductInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 14px;
  margin-bottom: 4px;
`;
export const CategoryDetailProductInfoItem = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 14px;
  margin-bottom: 12px;
`;
export const CategoryDetailProductInfoItemTitle = styled.div`
  line-height: 14px;
  margin-bottom: 4px;
  margin-right: 4px;
  width: 120px;
  color: var(--main-gary, #b9bdc5);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
export const CategoryDetailProductInfoItemContent = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  line-height: 14px;
  margin-bottom: 4px;
`;
