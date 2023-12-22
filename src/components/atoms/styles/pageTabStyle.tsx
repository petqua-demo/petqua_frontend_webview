import { styled } from 'styled-components';

export const CategoryCartListContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 60px;
`;

export const CategoryCartListBody = styled.div`
  width: 100%;
  height: 100%;
`;

export const CategoryCartListUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CategoryCartListLi = styled.li`
  width: 33%;
  height: 100%;
  border-bottom: 0.5px solid #b9bdc5;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  &.selected {
    color: #4d4d4d;
    border-bottom: 1px solid #4d4d4d;
  }
`;
