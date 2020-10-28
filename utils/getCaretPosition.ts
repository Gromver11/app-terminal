export const getCaretPosition = (
  inputValue: string,
  idx: number,
  operationName: string
): number => {
  if (operationName === 'add') {
    switch (inputValue[idx + 1]) {
      case '-':
        return idx + 2;
      case ')':
        return idx + 3;
      default:
        return idx + 1;
    }
  } else {
    switch (inputValue[idx]) {
      case ' ':
        return idx - 2;
      case '-':
        return idx - 1;
      case ')':
        return idx - 3;
      default:
        return idx - 0;
    }
  }
};
