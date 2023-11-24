import { styled } from 'styled-components';

export const PageHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  /* flex-direction: column; */
  padding: 0 16px;
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
  z-index: 10;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
`;
export const PageHeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 56px;
  /* background-color: #fff; */
  /* padding: 0 16px; */
  /* margin-bottom: 20px; */
`;

export const PageHeaderBackButton = styled.div`
  /* width: 24px; */
  /* height: 24px; */
  background-color: #fff;
  /* border: 1px solid #e0e0e0; */
  /* border-radius: 50%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  left: 16px;
  top: 18px;
  z-index: 999;
`;

export const PageHeaderBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PageRightButtonContainer = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  align-items: center;
  div:nth-child(1) {
    margin-right: 4px;
  }
`;
