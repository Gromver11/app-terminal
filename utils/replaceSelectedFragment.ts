import { PhoneNumberState } from '../interfaces';

export const replaceSelectedFragment = (
  prevStateInput: string,
  currentInputValue: string,
  operationName: 'add' | 'del',
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
      const re = /[0-9]/g;
      newInputValue =
        '+7' +
        prevStateInput.slice(2, start) +
        selectedFragment.replace(re, '_') +
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
    if (charactersDiff) {
      isValidvalue = /[0-9]/.test(charactersDiff);
    }
    if (isValidvalue && charactersDiff) {
      const selectedFragment = prevStateInput
        .slice(start, end + 1)
        .includes('+7')
        ? prevStateInput.slice(2, end + 1)
        : prevStateInput.slice(start, end + 1);
      const checkSelectedFragment = selectedFragment.includes('(')
        ? prevStateInput.slice(2, start + 1)
        : prevStateInput.slice(2, start);
      const selectedFragmentFirstValidSimbol = selectedFragment.search(
        /[_0-9]/
      );
      newInputValue =
        '+7' +
        checkSelectedFragment +
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
