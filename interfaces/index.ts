export type Operator = {
  id: number,
  name: string,
  src: string,
};

export type PhoneNumberState = {
  newInputValue: string,
  changedSimbolIdx: number,
  operationName: string,
  start: number,
  end: number,
};

export type ValidationState = {
  phoneNumber: string,
  balance: string,
};

export type ValidatorCallback = (value: string) => string;
