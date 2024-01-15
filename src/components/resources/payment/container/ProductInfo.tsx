import * as s from '../styles/ProductInfoStyle';

const ProductInfo = ({ data }: any) => {
  const { quantity, price, productName, productId } = data;
  return (
    <s.ProductInfoContainer>
      <s.ProductInfoUl>
        <s.ProcutInfoLi>
          <s.ProductInfoImgArea></s.ProductInfoImgArea>
          <s.ProductInfoArea>
            <s.ProductInfoCompany>s아쿠아</s.ProductInfoCompany>
            <s.ProductInfoName>{productName}</s.ProductInfoName>
            <s.ProductInfoQuantity>수량 {quantity}개</s.ProductInfoQuantity>
            <s.ProductInfoBottomArea>
              <s.ProductInfoChip>옵션 / 수량</s.ProductInfoChip>
              <s.ProductInfoPrice>{price.toLocaleString()}원</s.ProductInfoPrice>
            </s.ProductInfoBottomArea>
          </s.ProductInfoArea>
        </s.ProcutInfoLi>
      </s.ProductInfoUl>
    </s.ProductInfoContainer>
  );
};

export default ProductInfo;
