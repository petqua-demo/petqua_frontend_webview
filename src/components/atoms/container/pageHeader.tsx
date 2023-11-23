import { useNavigate } from 'react-router-dom';
import * as s from '../styles/pageHeaderStyle';

const PageHeader = ({ title, subTitle }: any) => {
  const nav = useNavigate();
  return (
    <s.PageHeaderContainer>
      <s.PageHeaderBackButton onClick={() => nav(-1)}>뒤로가기</s.PageHeaderBackButton>
      <s.PageHeaderTitle>{title}</s.PageHeaderTitle>
    </s.PageHeaderContainer>
  );
};

export default PageHeader;
