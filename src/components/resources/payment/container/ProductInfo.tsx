import * as s from '../styles/ProductInfoStyle';

const ProductInfo = () => {
  return (
    <s.ProductInfoContainer>
      <s.ProductInfoUl>
        <s.ProcutInfoLi>
          <s.ProductInfoImgArea></s.ProductInfoImgArea>
          <s.ProductInfoArea>
            <s.ProductInfoCompany>s아쿠아</s.ProductInfoCompany>
            <s.ProductInfoName>구피 50마리</s.ProductInfoName>
            <s.ProductInfoQuantity>수량 1개</s.ProductInfoQuantity>
            <s.ProductInfoBottomArea>
              <s.ProductInfoChip>옵션 / 수량</s.ProductInfoChip>
              <s.ProductInfoPrice>{(30000).toLocaleString()}원</s.ProductInfoPrice>
            </s.ProductInfoBottomArea>
          </s.ProductInfoArea>
        </s.ProcutInfoLi>
      </s.ProductInfoUl>
    </s.ProductInfoContainer>
  );
};

export default ProductInfo;
