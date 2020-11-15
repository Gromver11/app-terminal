import {
  MouseEvent,
  useEffect,
  useRef,
  useState,
  BaseSyntheticEvent,
  useCallback,
} from 'react';
import { PhoneNumberState, ValidationState } from '../interfaces';
import { getNewPhoneNumberState } from '../utils/getNewPhoneNumberState';
import { getCaretPosition } from '../utils/getCaretPosition';
import { replaceSelectedFragment } from '../utils/replaceSelectedFragment';
import { checkValidate } from '../utils/validators';
import {
  Form,
  FieldsWrapper,
  InputStyled,
  FormLabel,
  FormButton,
} from '../styles';
import { getSumValue } from '../utils/getSumValue';

const allowedKeys: { [index: string]: number[] } = {
  add: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
  del: [8],
  neutral: [37, 38, 39, 40],
};

const PaymentForm: React.FC = () => {
  const [errors, setErrors] = useState<ValidationState>({
    phoneNumber: '',
    sum: '',
  });
  const [sum, setSum] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumberState>({
    newInputValue: '',
    changedSimbolIdx: 0,
    operationName: 'add',
    start: 0,
    end: 0,
  });
  const onHandleBlur = useCallback((e: BaseSyntheticEvent) => {
    e.persist();
    setErrors((prev) => ({
      ...prev,
      [e.target.id]: checkValidate(e.target.value, e.target.id),
    }));
  }, []);
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const { changedSimbolIdx, operationName, start, end } = phoneNumber;
    if (start !== end) {
      inputEl.current?.setSelectionRange(start, end);
    } else if (start === end && operationName !== 'neutral') {
      const caretPosititon = inputEl.current
        ? getCaretPosition(
            inputEl.current.value,
            changedSimbolIdx,
            operationName
          )
        : 0;
      inputEl.current?.setSelectionRange(caretPosititon, caretPosititon);
    } else return;
  }, [phoneNumber]);

  const onHandleKeyPress = useCallback((e) => {
    for (const operation in allowedKeys) {
      if (allowedKeys[operation].includes(e.keyCode)) {
        setPhoneNumber((prev) => ({
          ...prev,
          operationName: operation,
        }));
      }
    }
  }, []);

  const onHandleFocus = useCallback((e: BaseSyntheticEvent) => {
    e.persist();
    if (e.target.value === '') {
      setPhoneNumber((prev) => ({
        ...prev,
        newInputValue: '+7 (___) ___-__-__',
      }));
    }
    setTimeout(() => {
      const caretPos = e.target.value.indexOf('_');
      e.target.setSelectionRange(caretPos, caretPos);
    }, 100);
  }, []);
  const onHandleChangePhoneNumber = useCallback(
    (e: BaseSyntheticEvent) => {
      const { target } = e;
      const { start, end } = phoneNumber;
      if (start === end) {
        setPhoneNumber((prev) =>
          getNewPhoneNumberState(
            prev.newInputValue,
            target.value,
            prev.operationName
          )
        );
      } else {
        setPhoneNumber((prev) =>
          replaceSelectedFragment(
            prev.newInputValue,
            target.value,
            prev.operationName,
            prev.start,
            prev.end
          )
        );
      }
    },
    [phoneNumber]
  );
  const onHandleSelect = useCallback((e: BaseSyntheticEvent) => {
    e.persist();
    if (e.target.selectionStart !== e.target.selectionEnd) {
      setPhoneNumber((prev) => ({
        ...prev,
        start: e.target.selectionStart,
        end: e.target.selectionEnd,
      }));
    }
  }, []);
  const onHandleChangeSum = useCallback((e) => {
    e.persist();
    setSum((prev) => getSumValue(prev, e.target.value));
  }, []);
  return (
    <Form>
      <FieldsWrapper>
        <FormLabel htmlFor="phoneNumber">
          Введите номер телефона
          <InputStyled
            onBlur={onHandleBlur}
            onKeyDown={onHandleKeyPress}
            onSelect={onHandleSelect}
            ref={inputEl}
            onFocus={onHandleFocus}
            id="phoneNumber"
            type="text"
            value={phoneNumber.newInputValue}
            onChange={onHandleChangePhoneNumber}
          />
          {errors.phoneNumber !== '' ? <div>{errors.phoneNumber}</div> : null}
        </FormLabel>
        <FormLabel htmlFor="sum">
          Введите сумму платежа
          <InputStyled
            id="sum"
            type="text"
            value={sum}
            onChange={onHandleChangeSum}
            onBlur={onHandleBlur}
          />
          {errors.sum !== '' ? <div>{errors.sum}</div> : null}
        </FormLabel>
      </FieldsWrapper>
      <FormButton type="submit" onClick={handleSubmit}>
        Пополнить
      </FormButton>
    </Form>
  );
};

export default PaymentForm;
