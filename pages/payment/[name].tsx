import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../components/Layout';
import PaymentForm from '../../components/PaymentForm';
import { Operator } from '../../interfaces';
import { operatorListSetup } from '../../utils/config';

type PaymentProps = {
  item: Operator,
  errors: string,
};

const Payment: React.FC<PaymentProps> = ({ item, errors }) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={` ${item?.name} | Next.js + TypeScript Example`}>
      <img src={item.src} alt={item.name} />
      {item && <PaymentForm />}
    </Layout>
  );
};

export default Payment;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = operatorListSetup.map((operator) => ({
    params: { name: operator.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const name = params?.name;
    const item = operatorListSetup.find((data) => data.name === name);
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
