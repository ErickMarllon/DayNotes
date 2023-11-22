import styled from 'styled-components';
import device from './media';
export const AppStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;
export const Aside = styled.aside`
  width: 320px;
  margin-bottom: 30px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px 20px;
  position: fixed;

  @media ${device.laptop} {
    position: relative;
    width: 100%;
  }
`;
export const Strong = styled.strong`
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333;
`;
export const Form = styled.form`
  margin-top: 30px;
`;
export const Item = styled.div`
  margin-top: 30px;
`;

export const Label = styled.label`
  color: #acacac;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;
export const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
`;
export const TextArea = styled.textarea`
  margin-top: 7px;
  width: 100%;
  height: 200px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
  background: #fff;
  resize: none;
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #e88f7a;
  border-radius: 10px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  :disabled {
    background-color: #ffd3ca;
  }
`;

export const Main = styled.main`
  flex: 1;
  margin-left: 350px;

  @media ${device.laptop} {
    margin-left: 0;
    width: 100%;
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  list-style: none;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;
