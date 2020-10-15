import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f5f5dc;
`;
const InputStyled = styled.input`
  padding: 10px 0;
  background-color: #eeee;
  border-radius: 5px;
  width: 100%;
`;
const FormLabel = styled.label`
  text-align: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const FormButton = styled.button`
  background: blue;
  color: #fff;
  font-weight: bold;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  height: 40px;
`;

const FieldsWrapper = styled.div`
  margin-bottom: 20px;
`;
const PaymentForm: React.FC = () => {
  return (
    <Form>
      <FieldsWrapper>
        <FormLabel htmlFor="phoneNumber">
          Введите номер телефона
          <InputStyled id="phoneNumber" type="text" />
        </FormLabel>
        <FormLabel htmlFor="balance">
          Введите сумму баланса
          <InputStyled id="balance" type="text" />
        </FormLabel>
      </FieldsWrapper>
      <FormButton type="submit">Пополнить</FormButton>
    </Form>
  );
};

export default PaymentForm;
