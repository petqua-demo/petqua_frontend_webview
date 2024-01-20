import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30%;
  margin-bottom: 21px;
  p {
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    color: #333333;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  p {
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #333333;
  }
  input {
    margin-left: auto;
    width: 264px;
    height: 38px;
    border-radius: 8px;
    border: 0.5px solid var(--main-gary, #B9BDC5);
    padding: 10px;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  p {
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #333333;
    margin-top: 8px;
  }
`

export const AddressInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  gap: 16px;
  input {
    width: 264px;
    height: 38px;
    border-radius: 8px;
    border: 0.5px solid #B9BDC5;
    padding: 10px;
  }
`;

export const AddressButtonDiv = styled.div`
  width: 80px;
  height: 38px;
  border-radius: 8px;
  border: 0.5px solid #69A1FF;
  color: #69A1FF;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddressFirstDiv = styled.div`
  display: flex;
  gap: 8px;
  input {
    width: 176px;
    height: 38px;
    border-radius: 8px;
    border: 0.5px solid #B9BDC5;
    background: #ECF3FF;
    padding: 10px;
  }
`;

export const AddressDisabledInput = styled.input`
  width: 176px;
  height: 38px;
  border-radius: 8px;
  border: 0.5px solid #B9BDC5;
  background: #ECF3FF;
  padding: 10px;
`;

export const CheckBox = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;

  input {
    width: 18px;
    height: 18px;
    border-radius: 2px;
    border: 0.5px solid #B9BDC5;
    background: transparent;
    appearance: normal; 
  }
`;

export const BottomButton = styled.button`
  margin-top: 50px;
  width: 120%;
  transform: translateX(-10%);
  height: 67px;
  background: #69A1FF;
  color: #FFF;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  box-sizing: border-box;
`;