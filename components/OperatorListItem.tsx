import Link from 'next/link';
import { Img } from '../styles';

import { Operator } from '../types';

type OperatorListItemProps = {
  data: Operator,
};

const OperatorListItem: React.FC<OperatorListItemProps> = ({ data }) => {
  return (
    <Link href="/payment/[name]" as={`/payment/${data.name}`} passHref>
      <a>
        <Img isFormImg={false} src={data.src} alt={data.name} />
      </a>
    </Link>
  );
};

export default OperatorListItem;
