import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font: 14px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  height: 111px;
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
  background-color: #eeee;
  border-radius: 5px;
  width: 100%;
`;
export const FormLabel = styled.label`
  text-align: center;
  margin-bottom: 10px;
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
`;

export const FieldsWrapper = styled.div`
  margin-bottom: 20px;
`;
