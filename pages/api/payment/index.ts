import { NextApiRequest, NextApiResponse } from 'next';
const paymentHandler = (
  _req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
): void => {
  const idx = Math.random() > 0.5;
  if (!idx) {
    res.status(404).json({
      message:
        'При отправке данных на сервер произошла ошибка. Повторите попытку еще раз',
    });
  } else {
    res.status(200).json({
      message: 'Операция совершена успешно',
    });
  }
};

export default paymentHandler;
