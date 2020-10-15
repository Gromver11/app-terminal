import Layout from '../components/Layout';
import OperatorList from '../components/OperatorList';
import { operatorListSetup } from '../utils/config';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font: 14px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif;
}
`;
const IndexPageTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;
const IndexPage: React.FC = () => (
  <>
    <GlobalStyle />
    <Layout title="Home | Next.js + TypeScript Example">
      <IndexPageTitle>
        Чтобы пополнить баланс, выберите оператора из списка
      </IndexPageTitle>
      <OperatorList items={operatorListSetup} />
    </Layout>
  </>
);

export default IndexPage;
