import * as React from 'react';

const PaymentForm: React.FC = () => {
  return (
    <form>
      <label htmlFor="phoneNumber">Введите номер телефона</label>
      <input id="phoneNumber" type="text" />
      <label htmlFor="balance">Введите сумму баланса</label>
      <input id="balance" type="text" />
      <button type="submit">Пополнить</button>
    </form>
  );
};

export default PaymentForm;
