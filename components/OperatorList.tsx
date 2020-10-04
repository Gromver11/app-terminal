import * as React from "react";
import  OperatorListItem from "./OperatorListItem";
import { Operator } from "../interfaces";

type OperatorListProps = {
  items: Operator[];
};

const OperatorList: React.FC<OperatorListProps> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <OperatorListItem data={item} />
      </li>
    ))}
  </ul>
);

export default OperatorList;
