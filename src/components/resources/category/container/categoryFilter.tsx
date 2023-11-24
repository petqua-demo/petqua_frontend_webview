import { useState } from 'react';
import * as s from '../styles/categoryFilterStyle';
import { useAppDispatch } from '../../../../modules/redux/store';
import { success } from '../../../../components/modules/toast/ToastAction';

const CategoryFilter = ({ payload, close }: any) => {
  const { data } = payload;
  const [isCheck, setIsCheck] = useState(0);
  const dispatch = useAppDispatch();

  function handleClose() {
    close();
    setTimeout(() => {
      dispatch(success({ message: '필터가 적용되었습니다.' }));
    }, 250);
  }
  return (
    <s.CategoryFilterContainer>
      <s.CategoryFilterHeader>
        <s.CategoryFilterHeaderTitle>{data?.Filter?.title}</s.CategoryFilterHeaderTitle>
      </s.CategoryFilterHeader>
      <s.CategoryFilterBody>
        {data?.Filter?.items.map((item: any) => (
          <s.CategoryFilterBodyItem onClick={() => setIsCheck(item.id)} id={item.id}>
            <s.CategoryFilterBodyItemCircle>
              {isCheck === item.id && <s.CategoryFilterBodyItemCircleInner />}
            </s.CategoryFilterBodyItemCircle>
            <s.CategoryFilterItemTitle>{item.name}</s.CategoryFilterItemTitle>
          </s.CategoryFilterBodyItem>
        ))}
      </s.CategoryFilterBody>
      <s.CategoryFilterButtonContainer>
        <s.CategoryFilterButton onClick={handleClose}>적용하기</s.CategoryFilterButton>
      </s.CategoryFilterButtonContainer>
    </s.CategoryFilterContainer>
  );
};

export default CategoryFilter;
