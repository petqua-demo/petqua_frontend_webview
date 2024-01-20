import * as s from '../styles/ProductInfoStyle';
import neon from '../../../../assets/img/neon.png';
import rainbow from '../../../../assets/img/rainbow.png';
import fullblack from '../../../../assets/img/fullblack.png';
import halfmoon from '../../../../assets/img/halfmoon.png';

const arr = [neon,rainbow,fullblack,halfmoon];

const ProductInfo = ({ data } : any) => {
  return (
    <s.ProductInfoContainer>
      <s.ProductInfoUl>
        <s.ProcutInfoLi>
          <s.ProductInfoImgArea>
            <img src={arr[data.productId-1]}/>
          </s.ProductInfoImgArea>
          <s.ProductInfoArea>
            <s.ProductInfoCompany>{data.storeName}</s.ProductInfoCompany>
            <s.ProductInfoName>{data.productName}</s.ProductInfoName>
            <s.ProductInfoQuantity>수량 {data.quantity}마리</s.ProductInfoQuantity>
            <s.ProductInfoBottomArea>
              <s.ProductInfoChip>옵션 / 수량</s.ProductInfoChip>
              <s.ProductInfoPrice>{(data.salePrice * data.quantity).toLocaleString()}원</s.ProductInfoPrice>
            </s.ProductInfoBottomArea>
          </s.ProductInfoArea>
        </s.ProcutInfoLi>
      </s.ProductInfoUl>
    </s.ProductInfoContainer>
  );
};

export default ProductInfo;
