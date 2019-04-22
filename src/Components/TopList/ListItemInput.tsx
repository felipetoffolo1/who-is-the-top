import React, { useState } from "react";
import { Button } from "../Basics/Button";
import { TextInput } from "../Basics/TextInput";
export interface Props {
  onCreate: Function;
}

const ListItemInput: React.FunctionComponent<Props> = props => {
  const { onCreate } = props;
  const [inputValue, setInputValue] = useState();
  return (
    <li>
      <TextInput
        value={inputValue}
        onChange={(e: any) => setInputValue(e.target.value)}
      />
      <Button
        onClick={() => onCreate({ name: inputValue, id: inputValue, score: 0 })}
      >
        Create
      </Button>
    </li>
  );
};

export default ListItemInput;
