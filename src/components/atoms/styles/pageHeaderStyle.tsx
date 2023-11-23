import { styled } from 'styled-components';

export const PageHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  border-bottom: 1px solid #e0e0e0;
`;
export const PageHeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 56px;
  background-color: #fff;
  /* padding: 0 16px; */
  margin-bottom: 20px;
`;

export const PageHeaderBackButton = styled.div`
  position: fixed;
  top: 20px;
  background-color: #fff;
  border-radius: 50%;
`;

export const PageHeaderBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
