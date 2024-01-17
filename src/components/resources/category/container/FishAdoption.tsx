import { useEffect, useState } from 'react';
import * as s from '../styles/FishAdoptionStyle';
import { FishData } from '../../../../assets/data/fishData';

const price_array = FishData.items.map(item=> item.salePrice);

const FishAdoption = ({ data, payload, close }: any) => {
  const currentPathname = window.location.pathname;
  const idx = Number(currentPathname.slice(-1))-1;
  const price = price_array[idx];
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState(price);

  return (
    <s.FishAdoptionContainer>
      <s.FishAdoptionHeader>
        <s.FishAdoptionPrice>{payment.toLocaleString()+'원'}</s.FishAdoptionPrice>
      </s.FishAdoptionHeader>
      <s.FishAdoptionBody>
        <s.FishAdoptionQuantity>수량</s.FishAdoptionQuantity>
        <s.FishAdoptionQuantitySelectorArea>
          <s.FishAdoptionQuantitySelectorButton
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
                setPayment(payment-price);
              }
            }}
          >
            -
          </s.FishAdoptionQuantitySelectorButton>
          <s.FishAdoptionQuantitySelectorInput>{quantity}</s.FishAdoptionQuantitySelectorInput>
          <s.FishAdoptionQuantitySelectorButton
            onClick={() => {
              setQuantity(quantity + 1);
              setPayment(payment+price);
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
