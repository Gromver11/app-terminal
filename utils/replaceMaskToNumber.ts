import { PhoneNumberState } from '../interfaces';

export const replaceMasktoNumber = (
  prevStateInput: string,
  currentInputValue: string
): PhoneNumberState => {
  if (currentInputValue.length > prevStateInput.length) {
    const charactersCurrentInputValue = currentInputValue.split('');
    let changedSimbolIdx;
    const charactersDiff = charactersCurrentInputValue.find(
      (inputValueSimbol, idx) => inputValueSimbol !== prevStateInput[idx]
    );
    if (charactersDiff) {
      changedSimbolIdx = charactersCurrentInputValue.findIndex(
        (inputValueSimbol, idx) => inputValueSimbol !== prevStateInput[idx]
      );
      charactersCurrentInputValue.splice(changedSimbolIdx, 2, charactersDiff);
    }
    const newInputValue = charactersCurrentInputValue.join('');
    return {
      newInputValue,
      changedSimbolIdx,
    };
  } else {
    const charactersCurrentInputValue = currentInputValue.split('');
    const prevStateCharacters = prevStateInput.split('');
    // let changedSimbolIdx;
    // const charactersDiff = prevStateCharacters.find(
    //   (inputValueSimbol, idx) => inputValueSimbol !== currentInputValue[idx]
    // );
    // if (charactersDiff) {
    const changedSimbolIdx = prevStateCharacters.findIndex(
      (inputValueSimbol, idx) => inputValueSimbol !== currentInputValue[idx]
    );
    charactersCurrentInputValue.splice(changedSimbolIdx, 0, '_');
    // }
    const newInputValue = charactersCurrentInputValue.join('');
    return {
      newInputValue,
      changedSimbolIdx,
    };
  }
};

export default replaceMasktoNumber;
