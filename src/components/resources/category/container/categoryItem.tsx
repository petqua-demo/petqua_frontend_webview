import * as c from '../styles/categoryItemStyle';

const CategoryItem = ({ data }: any) => {
  return (
    <c.CategoryListBodyItem>
      <c.CategoryListItemImage>
        <img src={data.imageUrl} alt="물고기 사진" />
      </c.CategoryListItemImage>
      <c.CategoryItemStoreName>{data.storeName}</c.CategoryItemStoreName>
      <c.CategoryItemName>{data.productName}</c.CategoryItemName>
      <c.CategoryItemOriginPrice>{data.originPrice.toLocaleString()}원</c.CategoryItemOriginPrice>
      <c.CategoryItemDiscountPriceContainer>
        <c.CategoryItemDiscountRate>{data.discountRate}%</c.CategoryItemDiscountRate>
        <c.CategoryItemSalePrice>{data.salePrice.toLocaleString()}원</c.CategoryItemSalePrice>
      </c.CategoryItemDiscountPriceContainer>
    </c.CategoryListBodyItem>
  );
};

export default CategoryItem;
