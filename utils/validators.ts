import { ValidatorFunction } from '../types';

const dictionaryOfValidators: {
  [index: string]: ValidatorFunction,
} = {
  phoneNumber: (value: string) => {
    return value.split('').filter((el: string) => el === '_').length > 0
      ? 'Некорректный номер телефона'
      : '';
  },
  sum: (value: string) => {
    return +value < 1
      ? 'Минимальная сумма - 1 рубль'
      : +value > 1000
      ? 'Максимальная сумма - 1000 рублей'
      : '';
  },
};
export const checkValidate = (value: string, id: string): string => {
  return dictionaryOfValidators[id](value);
};
