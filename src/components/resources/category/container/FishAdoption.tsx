import { useEffect, useState } from 'react';
import * as s from '../styles/FishAdoptionStyle';

const FishAdoption = ({ data, payload, close }: any) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <s.FishAdoptionContainer>
      <s.FishAdoptionHeader>
        <s.FishAdoptionPrice>1,000,000원</s.FishAdoptionPrice>
      </s.FishAdoptionHeader>
      <s.FishAdoptionBody>
        <s.FishAdoptionQuantity>수량</s.FishAdoptionQuantity>
        <s.FishAdoptionQuantitySelectorArea>
          <s.FishAdoptionQuantitySelectorButton
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </s.FishAdoptionQuantitySelectorButton>
          <s.FishAdoptionQuantitySelectorInput>{quantity}</s.FishAdoptionQuantitySelectorInput>
          <s.FishAdoptionQuantitySelectorButton
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </s.FishAdoptionQuantitySelectorButton>
        </s.FishAdoptionQuantitySelectorArea>
      </s.FishAdoptionBody>
      <s.FishAdoptionButtonContainer>
        <s.FishAdoptionButton color="#004BCA" border=" #004BCA">
          봉달하기
        </s.FishAdoptionButton>
        <s.FishAdoptionButton
          color=" #fff"
          border=" #004BCA"
          backgroundColor="#004BCA"
          onClick={() => {
            payload.event?.onConfirm({
              quantity: quantity,
            });
            close();
          }}
        >
          입양하기
        </s.FishAdoptionButton>
      </s.FishAdoptionButtonContainer>
    </s.FishAdoptionContainer>
  );
};

export default FishAdoption;
