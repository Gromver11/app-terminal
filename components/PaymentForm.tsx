import {
  MouseEvent,
  useEffect,
  useRef,
  useState,
  BaseSyntheticEvent,
  useCallback,
} from 'react';
import { useRouter } from 'next/router';
import {
  ApiMessageState,
  PhoneNumberState,
  ValidationState,
} from '../interfaces';
import { getNewPhoneNumberState } from '../utils/getNewPhoneNumberState';
import { getCaretPosition } from '../utils/getCaretPosition';
import { replaceSelectedFragment } from '../utils/replaceSelectedFragment';
import { checkValidate } from '../utils/validators';
import { getSumValue } from '../utils/getSumValue';
import {
  Form,
  FieldsWrapper,
  InputStyled,
  FormLabel,
  FormButton,
  ValidationError,
} from '../styles';

const allowedKeys: { [index: string]: number[] } = {
  add: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
  del: [8],
  neutral: [37, 38, 39, 40],
};

const PaymentForm: React.FC = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<ValidationState>({
    phoneNumber: '',
    sum: '',
  });
  const [sum, setSum] = useState('');
  const [apiMessage, setApiMessage] = useState<ApiMessageState>({
    success: '',
    failture: '',
  });
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

  const onHandleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      fetch('/api/payment')
        .then((response) => {
          return response.ok
            ? response.json()
            : Promise.reject(
                'При отправке данных на сервер произошла ошибка. Повторите попытку еще раз'
              );
        })
        .then((response) => {
          setApiMessage((prev) => ({
            ...prev,
            success: response.message,
            failture: '',
          }));
          setTimeout(() => {
            router.push('/');
          }, 1000);
        })
        .catch((err) =>
          setApiMessage((prev) => ({ ...prev, success: '', failture: err }))
        );
    },
    [router]
  );

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
  const invalidForm =
    errors.phoneNumber !== '' ||
    errors.sum !== '' ||
    phoneNumber.newInputValue === '' ||
    sum === '';

  if (apiMessage.success !== '') {
    return <div>{apiMessage.success}</div>;
  }
  return (
    <>
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
            {errors.phoneNumber !== '' ? (
              <ValidationError>{errors.phoneNumber}</ValidationError>
            ) : null}
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
            {errors.sum !== '' ? (
              <ValidationError>{errors.sum}</ValidationError>
            ) : null}
          </FormLabel>
        </FieldsWrapper>
        <FormButton
          type="submit"
          onClick={onHandleSubmit}
          disabled={invalidForm}
        >
          Пополнить
        </FormButton>
      </Form>
      {apiMessage.failture !== '' ? <div>{apiMessage.failture}</div> : null}
    </>
  );
};

export default PaymentForm;
