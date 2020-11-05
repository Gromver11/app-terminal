import Layout from '../components/Layout';
import OperatorList from '../components/OperatorList';
import { operatorListSetup } from '../utils/config';
import { IndexPageTitle, GlobalStyle } from '../styles';

const IndexPage: React.FC = () => (
  <>
    <GlobalStyle />
    <Layout title="Home | Terminal">
      <IndexPageTitle>
        Чтобы пополнить баланс, выберите оператора из списка
      </IndexPageTitle>
      <OperatorList items={operatorListSetup} />
    </Layout>
  </>
);

export default IndexPage;
