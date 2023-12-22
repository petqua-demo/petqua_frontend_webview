import { useEffect, useState } from 'react';
import * as s from '../styles/FishAdoptionStyle';
import { useAppDispatch } from '../../../../modules/redux/store';
import { success } from '../../../../components/modules/toast/ToastAction';
import { useNavigate } from 'react-router-dom';

const FishAdoption = ({ data, payload, close }: any) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

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
        <s.FishAdoptionButton
          onClick={() => {
            dispatch(
              success({
                message: '봉달목록에 추가되었습니다',
                margin: { bottom: '100px' },
                action: {
                  action: () => {
                    nav('/cart');
                    console.log('봉달목록 가기');
                  },
                  text: '봉달목록 가기 >',
                },
              }),
            );
            close();
          }}
          color="#004BCA"
          border=" #004BCA"
        >
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
