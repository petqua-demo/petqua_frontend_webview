import * as s from '../styles/DeliveryAddressInfoStyle';
import ReactDaumPostcode from '../../../../plugins/lib/ReactDaumPostcode';
import { useState } from 'react';
import { useAppDispatch } from '../../../../modules/redux/store';
import { presentDrawer } from '../../../../components/modules/drawer/DrawerAction';
import { DrawerPosition } from '../../../../components/modules/drawer/types';

const DeliveryAddressInfo = () => {
  const dispatch = useAppDispatch();
  function handleOpenDrawer(drawerPayload: any) {
    // dispatch(presentDrawer(drawerPayload));
  }
  return (
    <s.DeliveryAddressInfoContainer
      onClick={() =>
        handleOpenDrawer({
          component: ReactDaumPostcode,
          useCloseButton: false,
          data: {},
          event: {
            onClose: () => {},
          },
        })
      }
    >
      <s.DeliveryAddressInfoBox>
        <p>배송지가 없습니다</p>
        <p>배송지 입력하기</p>
      </s.DeliveryAddressInfoBox>
    </s.DeliveryAddressInfoContainer>
  );
};

export default DeliveryAddressInfo;
