import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Operator } from '../interfaces';

type OperatorListItemProps = {
  data: Operator,
};

const OperatorListItemImg = styled.img`
  width: 100%;
`;

const OperatorListItem: React.FC<OperatorListItemProps> = ({ data }) => {
  return (
    <Link href="/payment/[name]" as={`/payment/${data.name}`} passHref>
      <a>
        <OperatorListItemImg src={data.src} alt={data.name} />
      </a>
    </Link>
  );
};

export default OperatorListItem;
