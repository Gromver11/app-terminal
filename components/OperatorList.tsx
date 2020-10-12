import * as React from "react";
import OperatorListItem from "./OperatorListItem";
import { Operator } from "../interfaces";
import styled from "styled-components";

type OperatorListProps = {
  items: Operator[];
};

const OperatorListStyled = styled.ul`
  list-style: none;
`;

const OperatorList: React.FC<OperatorListProps> = ({ items }) => (
  <OperatorListStyled>
    {items.map((item) => (
      <li key={item.id}>
        <OperatorListItem data={item} />
      </li>
    ))}
  </OperatorListStyled>
);

export default OperatorList;
