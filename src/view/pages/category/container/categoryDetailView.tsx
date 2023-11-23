import * as c from '../styles/categoryDetailStyle';
import { Filter } from '../../../../assets/data/filter';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../../../components/atoms/container/pageHeader';
const CategoryDetailView = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <c.CategoryDetailContainer>
      <PageHeader title={'구피'} />
      <c.CategoryDetailImageContainer>
        <c.CategoryDetailImage src={data.imageUrl} />
      </c.CategoryDetailImageContainer>
      <c.CategeoryDetailInfoContainer>
        <c.CategoryStoreName>{data.storeName}</c.CategoryStoreName>
        <c.CategoryDetailInfoTitle>{data.productName}</c.CategoryDetailInfoTitle>
        <c.CategoryDetailCategory>{data.category}</c.CategoryDetailCategory>
        <c.CategoryDetailOriginPrice>{data.originPrice.toLocaleString()}원</c.CategoryDetailOriginPrice>
        <c.CategoryDetailDiscountPriceContainer>
          <c.CategoryDetailDiscountRate>{data.discountRate}%</c.CategoryDetailDiscountRate>
          <c.CategoryDetailSalePrice>{data.salePrice.toLocaleString()}원</c.CategoryDetailSalePrice>
        </c.CategoryDetailDiscountPriceContainer>
        <c.CategoryDetailDescriptionContainer>
          <c.CategoryDetailDescription>{data.productDescription}</c.CategoryDetailDescription>
        </c.CategoryDetailDescriptionContainer>
        <c.CategoryDetailImage src={data.noticeImg} />
        <c.CategoryDetailProductInfoContainer>
          <c.CategoryDetailProductInfoTitle>상품정보</c.CategoryDetailProductInfoTitle>
          {data.productInfo.map((item: any) => (
            <c.CategoryDetailProductInfoItem>
              <c.CategoryDetailProductInfoItemTitle>{item.title}</c.CategoryDetailProductInfoItemTitle>
              <c.CategoryDetailProductInfoItemContent>{item.description}</c.CategoryDetailProductInfoItemContent>
            </c.CategoryDetailProductInfoItem>
          ))}
        </c.CategoryDetailProductInfoContainer>
      </c.CategeoryDetailInfoContainer>
      <c.CategoryDetailButtomContainer>
        <c.CategoryDetailBottomButton>입양하기</c.CategoryDetailBottomButton>
      </c.CategoryDetailButtomContainer>
    </c.CategoryDetailContainer>
  );
};

export default CategoryDetailView;
