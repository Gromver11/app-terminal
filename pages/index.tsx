
import Layout from "../components/Layout";
import OperatorList from "../components/OperatorList";
import { operatorListSetup } from "../utils/config";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Чтобы пополнить баланс, выберите оператора из списка</h1>
    <OperatorList items={operatorListSetup} />
  </Layout>
);

export default IndexPage;
