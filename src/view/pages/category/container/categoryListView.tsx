import * as c from '../styles/categoryListStyle';
import { dismissAll, presentDrawer } from '../../../../components/modules/drawer/DrawerAction';
import CategoryFilter from '../../../../components/resources/category/container/categoryFilter';
import { useAppDispatch } from '../../../../modules/redux/store';
import CategoryItem from '../../../../components/resources/category/container/categoryItem';
import { useNavigate } from 'react-router-dom';
import { Filter } from '../../../../assets/data/filter';
import { FishData } from '../../../..//assets/data/fishData';
import PageHeader from '../../../../components/atoms/container/pageHeader';

const CategoryListView = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  function handleOpenDrawer(drawerPayload: any) {
    dispatch(presentDrawer(drawerPayload));
  }

  function handleNavigate(id: number, data: any) {
    nav(`${id}`, {
      state: data,
    });
  }

  return (
    <c.CategoryListContainer>
      <PageHeader title={'구피'} />
      <c.CategoryFilterContainer>
        <c.CategoryFilterItem
          onClick={() => {
            handleOpenDrawer({
              component: CategoryFilter,
              useCloseButton: false,
              data: {
                Filter: Filter['species']['goofy'],
              },
              event: {
                onClose: () => {
                  dispatch(dismissAll());
                },
              },
            });
          }}
        >
          어종
        </c.CategoryFilterItem>
        <c.CategoryFilterItem
          onClick={() => {
            handleOpenDrawer({
              component: CategoryFilter,
              useCloseButton: false,
              data: {
                Filter: Filter['filter'],
              },
              event: {
                onClose: () => {
                  dispatch(dismissAll());
                },
              },
            });
          }}
        >
          펫쿠아 추천순
        </c.CategoryFilterItem>
      </c.CategoryFilterContainer>
      <c.CategoryListBody>
        {FishData.items.map((item: any) => (
          <div className="item-wrap" onClick={() => handleNavigate(item.productId, item)}>
            <CategoryItem key={item.productId} data={{ ...item }} />
          </div>
        ))}
      </c.CategoryListBody>
    </c.CategoryListContainer>
  );
};

export default CategoryListView;
