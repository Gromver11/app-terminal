import { PhoneNumberState } from '../interfaces';
import { transformInputValue } from './transformInputValue';

export const replaceMasktoNumber = (
  prevStateInput: string,
  currentInputValue: string
): PhoneNumberState => {
  let newInputValue = '';
  let changedSimbolIdx;
  if (currentInputValue.length > prevStateInput.length) {
    const operationName = 'add';
    const charactersCurrentInputValue = currentInputValue.split('');
    const charactersDiff = charactersCurrentInputValue.find(
      (inputValueSimbol, idx) => inputValueSimbol !== prevStateInput[idx]
    );
    if (charactersDiff) {
      changedSimbolIdx = charactersCurrentInputValue.findIndex(
        (inputValueSimbol, idx) => inputValueSimbol !== prevStateInput[idx]
      );
      newInputValue = transformInputValue(
        charactersCurrentInputValue,
        changedSimbolIdx,
        charactersDiff,
        operationName
      );
    }
    return {
      newInputValue,
      changedSimbolIdx,
      operationName,
    };
  } else {
    const operationName = 'del';
    const charactersCurrentInputValue = currentInputValue.split('');
    const prevStateCharacters = prevStateInput.split('');
    const charactersDiff = prevStateCharacters.find(
      (inputValueSimbol, idx) => inputValueSimbol !== currentInputValue[idx]
    );
    if (charactersDiff) {
      changedSimbolIdx = prevStateCharacters.findIndex(
        (inputValueSimbol, idx) => inputValueSimbol !== currentInputValue[idx]
      );

      newInputValue = transformInputValue(
        charactersCurrentInputValue,
        changedSimbolIdx,
        charactersDiff,
        operationName
      );
    }
    return {
      newInputValue,
      changedSimbolIdx,
      operationName: 'del',
    };
  }
};

export default replaceMasktoNumber;
