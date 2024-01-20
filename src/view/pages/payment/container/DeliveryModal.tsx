import { useEffect, useState } from 'react';
import Modal, {Styles} from 'react-modal';
import * as s from '../styles/DeliveryModalStyle';
import { ReactSVG } from 'react-svg';
import ThickBackIcon from '../../../../assets/icons/svg/thick-back-icon.svg';

const customStyles: Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    top: 'auto',
    bottom: '-550px',
    left: '0',
    width : '100%',
    height : '550px',
    borderRadius: '12px 12px 0px 0px',
    background: '#fff',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '20px 20px 0 20px',
    transition: 'bottom 0.3s ease-out',
  },
};

Modal.setAppElement('#root');

const DeliveryModal = ({ isOpen, onRequestClose, inputValues, onInputChange } : any) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  useEffect(() => {
    if (isOpen) {
      // 모달이 열릴 때 트랜지션을 활성화
      setTimeout(() => {
        setShouldAnimate(true);
      }, 0);
    } else {
      // 모달이 닫힐 때 트랜지션을 비활성화
      setShouldAnimate(false);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        ...customStyles,
        content: {
          ...customStyles.content,
          bottom: shouldAnimate ? '0' : '-550px', // 모달을 아래에서 위로 올라오도록 조절
        },
      }}
      contentLabel="Example Modal"
    >
      <s.HeaderContainer>
        <ReactSVG onClick={onRequestClose} src={ThickBackIcon} />
        <p>배송지 추가</p>
      </s.HeaderContainer>

      <s.InputContainer>
        <p>배송지명</p>
        <input type='text'/>
      </s.InputContainer>
      <s.InputContainer>
        <p>받는 사람</p>
        <input type='text' value={inputValues.username} onChange={(e) => onInputChange('username', e.target.value)}/>
      </s.InputContainer>
      <s.InputContainer>
        <p>전화번호</p>
        <input type='text'  value={inputValues.phonenum}
          onChange={(e) => onInputChange('phonenum', e.target.value)}/>
      </s.InputContainer>
      <s.AddressContainer>
        <p>주소</p>
        <s.AddressInputContainer>
          <s.AddressFirstDiv>
            <s.AddressButtonDiv>주소 찾기</s.AddressButtonDiv>
            <input disabled/>
          </s.AddressFirstDiv>
          <s.AddressDisabledInput disabled />
          <input placeholder='상세주소 입력' type='text' value={inputValues.address}
            onChange={(e) => onInputChange('address', e.target.value)}/>
          <s.CheckBox>
            <input type='checkbox' checked={isChecked} onChange={toggleCheckbox} />
            기본 배송지로 저장
          </s.CheckBox>
        </s.AddressInputContainer> 
      </s.AddressContainer> 
      <s.BottomButton onClick={onRequestClose}>
        적용하기
      </s.BottomButton>
    </Modal>
  );
};

export default DeliveryModal;