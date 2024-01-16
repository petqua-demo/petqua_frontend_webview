import * as c from '../styles/categoryDetailStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../../../../components/atoms/container/pageHeader';
import { ReactSVG } from 'react-svg';
import HaertIcon from '../../../../assets/icons/svg/heart-icon.svg';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../modules/redux/store';
import { setToastMargin, success } from '../../../../components/modules/toast/ToastAction';
import { dismissAll, presentDrawer } from '../../../../components/modules/drawer/DrawerAction';
import FishAdoption from '../../../../components/resources/category/container/FishAdoption';

import neon from '../../../../assets/img/neon.png';
import rainbow from '../../../../assets/img/rainbow.png';
import fullblack from '../../../../assets/img/fullblack.png';
import halfmoon from '../../../../assets/img/halfmoon.png';

const arr = [neon,rainbow,fullblack,halfmoon];

const CategoryDetailView = () => {
  const [isHeart, setIsHeart] = useState(false);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    dispatch(
      setToastMargin({
        bottom: '100px',
      }),
    );
  }, []);

  function handleHeart() {
    if (isHeart) {
      setIsHeart(false);
      dispatch(success({ message: '찜목록에서 삭제되었습니다', margin: { bottom: '100px' } }));
    } else {
      setIsHeart(true);
      dispatch(success({ message: '찜목록에 추가되었습니다', margin: { bottom: '100px' } }));
    }
  }
  function handleOpenDrawer(drawerPayload: any) {
    dispatch(presentDrawer(drawerPayload));
  }

  return (
    <c.CategoryDetailContainer>
      <PageHeader title={'난태생, 송사리과'} />
      <c.CategoryDetailImageContainer>
        <c.CategoryDetailImage src={arr[data.productId-1]} />
      </c.CategoryDetailImageContainer>
      <c.CategeoryDetailInfoContainer>
        <c.CategoryStoreName>{data.storeName}</c.CategoryStoreName>
        <c.CategoryDetailInfoTitle>{data.productName}</c.CategoryDetailInfoTitle>
        <c.CategoryDetailCategory>{data.category}</c.CategoryDetailCategory>
        <c.CategoryDetailDiscountPriceContainer>
          <c.CategoryDetailSalePrice>{data.salePrice.toLocaleString()}원</c.CategoryDetailSalePrice>
          <c.CategoryDetailDiscountRate>{data.discountRate}%</c.CategoryDetailDiscountRate>
        </c.CategoryDetailDiscountPriceContainer>
        <c.CategoryDetailOriginPrice>{data.originPrice.toLocaleString()}원</c.CategoryDetailOriginPrice>

        <c.CategoryDetailDescriptionContainer>
          <c.CategoryDetailDescription>{data.productDescription}</c.CategoryDetailDescription>
        </c.CategoryDetailDescriptionContainer>
        <c.CategoryDetailImage src={data.noticeImg} />
        <c.CategoryDetailProductInfoContainer>
          <c.CategoryDetailProductInfoTitle>입양정보</c.CategoryDetailProductInfoTitle>
          {data.productInfo.map((item: any) => (
            <c.CategoryDetailProductInfoItem>
              <c.CategoryDetailProductInfoItemTitle>{item.title}</c.CategoryDetailProductInfoItemTitle>
              <c.CategoryDetailProductInfoItemContent>{item.description}</c.CategoryDetailProductInfoItemContent>
            </c.CategoryDetailProductInfoItem>
          ))}
        </c.CategoryDetailProductInfoContainer>
      </c.CategeoryDetailInfoContainer>
      <c.CategoryDetailButtomContainer>
        <c.HeartButtonContainer>
          <ReactSVG onClick={handleHeart} src={HaertIcon} />
          <p>100</p>
        </c.HeartButtonContainer>

        <c.CategoryDetailBottomButton
          onClick={() => {
            handleOpenDrawer({
              component: FishAdoption,
              useCloseButton: false,
              data: {},
              event: {
                onClose: () => {
                  dispatch(dismissAll());
                },
                onConfirm: () => {
                  nav('/payment', {
                    state: data,
                  });
                },
              },
            });
          }}
        >
          입양하기
        </c.CategoryDetailBottomButton>
      </c.CategoryDetailButtomContainer>
    </c.CategoryDetailContainer>
  );
};

export default CategoryDetailView;
