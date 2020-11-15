export const getSumValue = (
  prevValue: string,
  currentValue: string
): string => {
  return currentValue.split('').filter((el) => !/[0-9]/.test(el)).length ===
    0 && currentValue.length <= 4
    ? currentValue
    : prevValue;
};
