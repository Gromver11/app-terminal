export type Operator = {
  id: number,
  name: string,
  src: string,
};

export type PhoneNumberState = {
  newInputValue: string,
  changedSimbolIdx: number,
  operationName: 'add' | 'del',
  start: number,
  end: number,
};
