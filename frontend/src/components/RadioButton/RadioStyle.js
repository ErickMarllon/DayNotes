import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  flex-direction: row;
`;
export const Span = styled.span`
color: #acacac;
`;
export const RadioButtonLabel = styled.label`
  position: absolute;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #e88f7a;
`;
export const RadioButtons = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      border-radius: 50%;
      background: #e88f7a;
      width: 10px;
      height: 10px;
    }
  }
  &:checked + ${RadioButtonLabel}{
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      border-radius: 50%;
      background: #e88f7a;
      color: white;
      width: 10px;
      height: 10px;
    }
  }
  &:checked + ${RadioButtonLabel} + ${Span}{
    color: #e88f7a;
`;
