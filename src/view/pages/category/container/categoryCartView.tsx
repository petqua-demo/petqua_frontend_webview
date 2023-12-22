import PageTab from '../../../../components/atoms/container/pageTab';
import PageHeader from '../../../../components/atoms/container/pageHeader';
import * as s from '../styles/categoryCartStyle';

const TabList = [
  {
    name: '안전배송',
    value: 'safeDelivery',
  },
  {
    name: '일반배송',
    value: 'normalDelivery',
  },
  {
    name: '매장 픽업',
    value: 'pickup',
  },
];

const CategoryCartView = () => {
  return (
    <s.CategoryCartListContainer>
      <PageHeader title={'봉달리스트'} />
      <PageTab pageTabList={TabList} />
    </s.CategoryCartListContainer>
  );
};

export default CategoryCartView;
