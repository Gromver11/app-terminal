import Layout from "../components/Layout";
import OperatorList from "../components/OperatorList";
import { operatorListSetup } from "../utils/config";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;
const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Чтобы пополнить баланс, выберите оператора из списка</h1>
      <OperatorList items={operatorListSetup} />
    </Layout>
  </>
);

export default IndexPage;
