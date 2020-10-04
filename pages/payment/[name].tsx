import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { config } from "../../utils/config";
import Layout from "../../components/Layout";
import { Operator } from "../../interfaces";

type Props = {
  item?: Operator;
  errors?: string;
};

const Payment: React.FC<Props> = ({ item }) => {
  // console.log(item);

  return <div>{item}</div>;
};
export default Payment;

 export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = config.map((item) => ({
      params: { name: item.name.toString() },
    }));

// //   // We'll pre-render only these paths at build time.
// //   { fallback: false } means other routes should 404.
 return { paths, fallback: false };
 };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  const item = config.find((data) => data.name === name);
  console.log(item)
  // By returning { props: item }, the StaticPropsDetail component
  // will receive `item` as a prop at build time
  return { props: { item }, };
};
