import React, { useState } from "react";
import { Button } from "../Basics/Button";
import { Direction } from "../../Constants/Direction";
export interface Props {
  id: string;
  name: string;
  score: string;
  onVote: Function;
}

const TopListItem: React.FunctionComponent<Props> = props => {
  const { id, name, score, onVote } = props;
  return (
    <li>
      {`${score} - ${name}`}{" "}
      <Button onClick={() => onVote(id, Direction.Up)}>Plus</Button>
      <Button onClick={() => onVote(id, Direction.Down)}>Minus</Button>
    </li>
  );
};

export default TopListItem;
