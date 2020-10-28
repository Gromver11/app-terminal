export const transformInputValue = (
  inputValue: string[],
  idx: number,
  changedSimbol: string,
  operationName: string
): string => {
  if (operationName === 'add') {
    switch (inputValue[idx + 1]) {
      case '-':
        inputValue.splice(idx, 3, '-', changedSimbol);
        return inputValue.join('');
      case ')':
        inputValue.splice(idx, 4, ')', ' ', changedSimbol);
        return inputValue.join('');
      default:
        inputValue.splice(idx, 2, changedSimbol);
        return inputValue.join('');
    }
  } else {
    switch (changedSimbol) {
      case '-':
      case ')':
        inputValue.splice(idx - 1, 1, '_', changedSimbol);
        return inputValue.join('');
      case ' ':
      case '_':
      case '+':
      case '(':
        inputValue.splice(idx, 0, changedSimbol);
        return inputValue.join('');
      default:
        inputValue.splice(idx, 0, '_');
        return inputValue.join('');
    }
  }
};
