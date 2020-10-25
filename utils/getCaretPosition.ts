export const getCaretPosition = (inputValue: string, idx: number): number => {
  switch (inputValue[idx + 1]) {
    case '-':
      return idx + 2;
    case ')':
      return idx + 3;
    default:
      return idx + 1;
  }
};
