import { PhoneNumberState } from '../types';

export const replaceSelectedFragment = (
  prevStateInput: string,
  currentInputValue: string,
  operationName: string,
  start: number,
  end: number
): PhoneNumberState => {
  let newInputValue = '';
  let changedSimbolIdx = 0;
  let isValidvalue = false;
  if (operationName === 'del') {
    const prevStateCharacters = prevStateInput.split('');
    const charactersDiff = prevStateCharacters.find(
      (inputValueSimbol, idx) => inputValueSimbol !== currentInputValue[idx]
    );
    if (charactersDiff) {
      changedSimbolIdx = prevStateCharacters.findIndex(
        (inputValueSimbol, idx) => inputValueSimbol !== currentInputValue[idx]
      );
      const selectedFragment = prevStateInput
        .slice(start, end + 1)
        .includes('+7')
        ? prevStateInput.slice(2, end + 1)
        : prevStateInput.slice(start, end + 1);
      newInputValue =
        '+7' +
        prevStateInput.slice(2, start) +
        selectedFragment.replace(/[0-9]/g, '_') +
        prevStateInput.slice(end + 1);
    }
    return {
      newInputValue,
      changedSimbolIdx,
      operationName,
      start: 0,
      end: 0,
    };
  } else {
    const charactersDiff = currentInputValue[start];
    changedSimbolIdx = start;
    if (charactersDiff) {
      isValidvalue = /[0-9]/.test(charactersDiff);
    }
    if (isValidvalue && charactersDiff) {
      const selectedFragment = prevStateInput
        .slice(start, end + 1)
        .includes('+7')
        ? prevStateInput.slice(2, end + 1)
        : prevStateInput.slice(start, end + 1).includes('(')
        ? prevStateInput.slice(3, end + 1)
        : prevStateInput.slice(start, end + 1);

      const selectedFragmentFirstValidSimbol = selectedFragment.search(
        /[_0-9]/
      );
      changedSimbolIdx = start > 3 ? start : 4;
      const startInputValue =
        selectedFragment === prevStateInput.slice(start, end + 1)
          ? prevStateInput.slice(4, start)
          : '';
      newInputValue =
        '+7' +
        ' ' +
        '(' +
        startInputValue +
        selectedFragment.replace(/[_0-9]/, charactersDiff)[
          selectedFragmentFirstValidSimbol
        ] +
        selectedFragment
          .slice(selectedFragmentFirstValidSimbol + 1)
          .replace(/[0-9]/g, '_') +
        prevStateInput.slice(end + 1);
    } else {
      newInputValue = prevStateInput;
    }
  }
  return {
    newInputValue,
    changedSimbolIdx,
    operationName,
    start: 0,
    end: 0,
  };
};
