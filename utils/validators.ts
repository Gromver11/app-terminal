import { ValidatorCallback } from '../interfaces';

const dictionaryOfValidators: {
  [index: string]: ValidatorCallback,
} = {
  phoneNumber: (value: string) => {
    return value.split('').filter((el: string) => el === '_').length > 0
      ? 'Некорректный номер телефона'
      : '';
  },
  balance: (value: string) => {
    return +value < 1
      ? 'минимальная сумма - 1 рубль'
      : +value > 1000
      ? 'максимальная сумма - 1000 рублей'
      : '';
  },
};
export const checkValidate = (value: string, id: string): string => {
  return dictionaryOfValidators[id](value);
};
