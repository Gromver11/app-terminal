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
@keyframes blink {
  0% {color: 0,0,0, 0,1}
  50% { color: rgba(0, 0, 0, 0,9)}
  51% { color: rgba(0, 0, 0, 0,6) }
  100% { color: transparent }
}
`;
export const IndexPageTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const Img =
  styled.img <
  {
    isFormImg: boolean,
  } >
  `
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.isFormImg ? '40%' : '100%')};
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 764px;
  }
`;

export const OperatorListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f5f5dc;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100px;
  }
`;
export const InputStyled = styled.input`
  padding: 10px 0;
  text-align: center;
  background-color: #eeee;
  border-radius: 5px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;
export const FormLabel = styled.label`
  text-align: center;
  display: block;
  margin-bottom: 50px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    }
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
  @media screen and (min-width: 768px) {
    width: 20%;
    border-radius: 0;
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export const FieldsWrapper = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 0;
  }
`;
export const ValidationError = styled.div`
  font-style: italic;
  color: red;
  font-weight: bold;
  position: absolute;
  width: 300px;
  @media screen and (min-width: 768px) {
    bottom: -35px;
    left: 118px;
    width: 200px;
  }
`;

export const LoadingTitle =
  styled.span <
  {
    animation: boolean,
  } >
  `
  font-weight: bold;
  animation: ${(props) =>
    props.animation ? 'blink 1s linear infinite' : 'none'}
`;
export const ApiMessageStyled =
  styled.div <
  {
    success: boolean,
  } >
  `
  font-weight: bold;
  font-style: italic;
  margin: 0 auto;
  font-size: ${(props) => (props.success ? '40px' : 'inherit')};
  text-align: center;
  color: ${(props) => (props.success ? 'green' : 'red')}
`;
