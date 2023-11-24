import { useNavigate } from 'react-router-dom';
import * as s from '../styles/pageHeaderStyle';
import { ReactSVG } from 'react-svg';
import BackIcon from '../../../assets/icons/svg/back-icon.svg';
import SearchIcon from '../../../assets/icons/svg/search-icon.svg';
import CartIcon from '../../../assets/icons/svg/cart-icon.svg';
const PageHeader = ({ title, subTitle }: any) => {
  const nav = useNavigate();
  return (
    <s.PageHeaderContainer>
      <s.PageHeaderBackButton onClick={() => nav(-1)}>
        <ReactSVG src={BackIcon} />
      </s.PageHeaderBackButton>
      <s.PageHeaderTitle>{title}</s.PageHeaderTitle>
      <s.PageRightButtonContainer>
        <ReactSVG src={SearchIcon} />
        <ReactSVG src={CartIcon} />
      </s.PageRightButtonContainer>
    </s.PageHeaderContainer>
  );
};

export default PageHeader;
