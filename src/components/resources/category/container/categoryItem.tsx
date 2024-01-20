import * as c from '../styles/categoryItemStyle';
import neon from '../../../../assets/img/neon.png';
import rainbow from '../../../../assets/img/rainbow.png';
import fullblack from '../../../../assets/img/fullblack.png';
import halfmoon from '../../../../assets/img/halfmoon.png';

const arr = [neon,rainbow,fullblack,halfmoon];

const CategoryItem = ({ data }: any) => {
  return (
    <c.CategoryListBodyItem>
      <c.CategoryListItemImage>
        <img src={arr[data.productId-1]} />
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