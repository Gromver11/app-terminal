import Layout from '../components/Layout';
import OperatorList from '../components/OperatorList';
import { operatorListSetup } from '../utils/config';
import { IndexPageTitle, GlobalStyle } from '../styles';

const IndexPage: React.FC = () => (
  <>
    <GlobalStyle />
    <Layout title="Home | Terminal">
      <IndexPageTitle>Терминал для оплаты мобильного телефона</IndexPageTitle>
      <OperatorList items={operatorListSetup} />
    </Layout>
  </>
);

export default IndexPage;
