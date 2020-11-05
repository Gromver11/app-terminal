import OperatorListItem from './OperatorListItem';
import { Operator } from '../interfaces';
import styled from 'styled-components';

type OperatorListProps = {
  items: Operator[],
};

const OperatorListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const OperatorListItemStyled = styled.li`
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  height: 111px;
  &:last-child {
    margin-bottom: 0;
  }
`;
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
