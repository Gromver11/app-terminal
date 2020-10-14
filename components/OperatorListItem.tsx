import React from 'react';
import Link from 'next/link';

import { Operator } from '../interfaces';

type OperatorListItemProps = {
  data: Operator,
};

const OperatorListItem: React.FC<OperatorListItemProps> = ({ data }) => {
  return (
    <Link href="/payment/[name]" as={`/payment/${data.name}`}>
      <a>
        <img src={data.src} alt={data.name} />
      </a>
    </Link>
  );
};

export default OperatorListItem;
