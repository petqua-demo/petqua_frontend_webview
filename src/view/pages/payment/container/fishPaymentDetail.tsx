import ProductInfo from '../../../../components/resources/payment/container/ProductInfo';
import PageHeader from '../../../../components/atoms/container/pageHeader';
import DeliveryAddressInfo from '../../../../components/resources/payment/container/DeliveryAddressInfo';
import * as s from '../styles/fishPaymentDetailStyle';
import DeliveryInfo from '../../../../components/resources/payment/container/DeliveryInfo';
import PaymentInfo from '../../../../components/resources/payment/container/PaymentInfo';
import PaymentSelectorInfo from '../../../../components/resources/payment/container/PaymentSelector';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import DeliveryModal from './DeliveryModal';
import bottomArrow from '../../../../assets/icons/svg/bottom-arrow.svg'
import { ReactSVG } from 'react-svg';

const FishPaymentDetail = () => {
  const location = useLocation();
  const data = location.state;
  const [delivery, setDelivery] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [inputValues, setInputValues] = useState({
    username: '',
    phonenum: '',
    address: '',
  });

  // 드랍다운
  const options = ['부재시 문앞에 놓아주세요', '배송전에 미리 연락주세요', '부재시 경비실에 맡겨주세요', '부재시 전화주세요'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option:any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleInputChange = (fieldName:any, value:any) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <s.FishPaymentDetailContainer>
      <PageHeader title={'주문 / 결제'} />
      <s.FishPaymentDetailBody>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
              <s.FishPaymentDetailIndicatorSummary>배송지</s.FishPaymentDetailIndicatorSummary>
            {(inputValues.address.length === 0 || isModalOpen ) 
            ? <DeliveryAddressInfo openModal={openModal} /> : 
            <s.AddressContainer>
              <s.AddressHeaderDiv>
                <s.UserName>{inputValues.username}</s.UserName>
                <s.ChangeAddress onClick={openModal}>배송지 변경</s.ChangeAddress>
              </s.AddressHeaderDiv>
              <s.PhoneNum>{inputValues.phonenum}</s.PhoneNum>
              <s.AddressText>{inputValues.address}</s.AddressText>
              <s.DeliveryDropDown>
                <s.DeliveryDropDownHeader onClick={toggleDropdown}>
                  {selectedOption ? selectedOption : 
                      <span>배송시 요청사항을 선택해주세요.</span>
                  }
                  <ReactSVG style={{marginLeft: 'auto'}} src={bottomArrow} />
                </s.DeliveryDropDownHeader>
                {isOpen && (
                  <ul className="dropdown-options">
                    {options.map((option, index) => (
                      <s.DeliveryDropDownOption key={index} onClick={() => handleOptionSelect(option)}>
                        {option}
                      </s.DeliveryDropDownOption>
                    ))}
                  </ul>
                )}
              </s.DeliveryDropDown>
            </s.AddressContainer>
            }
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>상품정보</s.FishPaymentDetailIndicatorSummary>
            <ProductInfo data={data} />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>배송정보</s.FishPaymentDetailIndicatorSummary>
            <DeliveryInfo setDelivery={setDelivery}/>
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>결제정보</s.FishPaymentDetailIndicatorSummary>
            <PaymentSelectorInfo />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
        <s.FishPaymentDetailIndicator>
          <s.FishPaymentDetailIndicatorDetail open>
            <s.FishPaymentDetailIndicatorSummary>결제금액</s.FishPaymentDetailIndicatorSummary>
            <PaymentInfo data={{ ...data, delivery }} />
          </s.FishPaymentDetailIndicatorDetail>
        </s.FishPaymentDetailIndicator>
      </s.FishPaymentDetailBody>
      <s.FishPaymentSubmitButtonArea>
        <s.FishPaymentDetailSubmitButton>결제하기</s.FishPaymentDetailSubmitButton>
      </s.FishPaymentSubmitButtonArea>
      <DeliveryModal isOpen={isModalOpen} onRequestClose={closeModal} 
        inputValues={inputValues} onInputChange={handleInputChange}/>
    </s.FishPaymentDetailContainer>
  );
};

export default FishPaymentDetail;
