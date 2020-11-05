import OperatorListItem from './OperatorListItem';
import { Operator } from '../interfaces';
import { OperatorListItemStyled, OperatorListStyled } from '../styles';

type OperatorListProps = {
  items: Operator[],
};

const OperatorList: React.FC<OperatorListProps> = ({ items }) => (
  <OperatorListStyled>
    {items.map((item) => (
      <OperatorListItemStyled key={item.id}>
        <OperatorListItem data={item} />
      </OperatorListItemStyled>
    ))}
  </OperatorListStyled>
);

export default OperatorList;
