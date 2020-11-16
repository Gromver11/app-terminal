import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font: 14px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #eaedf0;
}
`;
export const IndexPageTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const OperatorListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const OperatorListItemStyled = styled.li`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 111px;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f5f5dc;
`;
export const InputStyled = styled.input`
  padding: 10px 0;
  text-align: center;
  background-color: #eeee;
  border-radius: 5px;
  width: 100%;
`;
export const FormLabel = styled.label`
  text-align: center;
  display: block;
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const FormButton = styled.button`
  background: blue;
  color: #fff;
  font-weight: bold;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  height: 40px;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const FieldsWrapper = styled.div`
  margin-bottom: 50px;
`;
export const ValidationError = styled.div`
  font-style: italic;
  color: red;
  font-weight: bold;
  position: absolute;
  width: 300px;
`;
