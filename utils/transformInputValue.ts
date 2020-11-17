export const transformInputValue = (
  inputValue: string[],
  idx: number,
  changedSimbol: string,
  operationName: string
): string => {
  if (operationName === 'add') {
    const nextSimbol = idx > 3 && idx < 18 ? inputValue[idx + 1] : 'prefix';
    switch (nextSimbol) {
      case '-':
        inputValue.splice(idx, 3, '-', changedSimbol);
        return inputValue.join('');
      case ')':
        inputValue.splice(idx, 4, ')', ' ', changedSimbol);
        return inputValue.join('');
      case 'prefix':
        inputValue.splice(idx, 1);
        return inputValue.join('');
      default:
        inputValue.splice(idx, 2, changedSimbol);
        return inputValue.join('');
    }
  } else {
    const finalchangedSimbol = idx > 3 ? changedSimbol : 'prefix';
    switch (finalchangedSimbol) {
      case ')':
        inputValue.splice(idx - 1, 2, '_', changedSimbol, ' ');
        return inputValue.join('');
      case ' ':
        inputValue.splice(idx - 2, 2, '_', ')', changedSimbol);
        return inputValue.join('');
      case '-':
        inputValue.splice(idx - 1, 1, '_', changedSimbol);
        return inputValue.join('');
      case 'prefix':
        inputValue.splice(idx, 0, changedSimbol);
        return inputValue.join('');
      default:
        inputValue.splice(idx, 0, '_');
        return inputValue.join('');
    }
  }
};
