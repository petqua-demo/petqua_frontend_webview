import { styled } from 'styled-components';

//Category필터 바텀 시트 뷰 스타일
export const CategoryFilterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CategoryFilterHeader = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 56px;
  background-color: #fff;
  /* padding: 0 16px; */
  padding-top: 24px;
  margin-bottom: 20px;
`;

export const CategoryFilterHeaderTitle = styled.div`
  color: var(--Main-Dark, #333);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`;

export const CategoryFilterBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CategoryFilterBodyItem = styled.div`
  background-color: #fff;
  padding: 0 16px;
  font-size: 16px;
  line-height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CategoryFilterItemTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const CategoryFilterItem = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  background-color: #ccc;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const CategoryFilterButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const CategoryFilterButton = styled.div`
  width: 100%;
  height: 56px;
  background-color: #004bca;
  border-top: 1px solid #e0e0e0;
  border-radius: 16px;
  margin: 24px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
`;

export const CategoryFilterBodyItemTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const CategoryFilterBodyItemCircle = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #004bca;
  background-color: #fff;
  margin-right: 16px;
`;

export const CategoryFilterBodyItemCircleInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #004bca;
  margin: 0 auto;
`;
