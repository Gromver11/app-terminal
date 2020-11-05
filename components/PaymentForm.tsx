import {
  MouseEvent,
  useEffect,
  useRef,
  useState,
  BaseSyntheticEvent,
} from 'react';
import { PhoneNumberState } from '../interfaces';
import { replaceMasktoNumber } from '../utils/replaceMaskToNumber';
import { getCaretPosition } from '../utils/getCaretPosition';
import {
  Form,
  FieldsWrapper,
  InputStyled,
  FormLabel,
  FormButton,
} from '../styles';

const PaymentForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumberState>({
    newInputValue: '',
    changedSimbolIdx: 0,
    operationName: 'add',
    start: 0,
    end: 0,
  });
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const InputEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const { changedSimbolIdx, operationName, start, end } = phoneNumber;
    if (start !== end) {
      InputEl.current?.setSelectionRange(start, end);
    } else {
      const caretPosititon = InputEl.current
        ? getCaretPosition(
            InputEl.current.value,
            changedSimbolIdx,
            operationName
          )
        : 0;
      InputEl.current?.setSelectionRange(caretPosititon, caretPosititon);
    }
  }, [phoneNumber]);

  const handleFocus = (e: BaseSyntheticEvent) => {
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
  };
  const handleChange = (e: BaseSyntheticEvent) => {
    const { target } = e;
    setPhoneNumber((prev) =>
      replaceMasktoNumber(prev.newInputValue, target.value)
    );
  };
  const handleSelect = (e: BaseSyntheticEvent) => {
    e.persist();
    if (e.target.selectionStart !== e.target.selectionEnd) {
      setPhoneNumber((prev) => ({
        ...prev,
        start: e.target.selectionStart,
        end: e.target.selectionEnd,
      }));
    }
  };
  return (
    <Form>
      <FieldsWrapper>
        <FormLabel htmlFor="phoneNumber">
          Введите номер телефона
          <InputStyled
            onSelect={handleSelect}
            ref={InputEl}
            onFocus={handleFocus}
            id="phoneNumber"
            type="text"
            value={phoneNumber.newInputValue}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel htmlFor="balance">
          Введите сумму баланса
          <InputStyled id="balance" type="text" />
        </FormLabel>
      </FieldsWrapper>
      <FormButton type="submit" onClick={handleSubmit}>
        Пополнить
      </FormButton>
    </Form>
  );
};

export default PaymentForm;
