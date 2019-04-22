import React, { useState } from "react";
import { Direction } from "../../Constants/Direction";
import TopListItem from "../../Components/TopList/ListItem";
import ListItemInput from "../../Components/TopList/ListItemInput";
export interface TopListProps {
  title: string;
  description: string;
  items: Array<any>;
}
export interface iListItem {
  id: string;
  name: string;
  score: number;
}
const TopList: React.FunctionComponent<TopListProps> = props => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [items, setItems] = useState(props.items);
  const updateItemScore = (id: string, direction: Direction) =>
    setItems(
      items.map(item => {
        if (item.id === id) {
          direction === Direction.Up
            ? item.score++
            : item.score > 0 && item.score--;
        }
        return item;
      })
    );
  const addNewItem = (newItem: iListItem) => setItems([...items, newItem]);
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <ul>
        {items &&
          items
            .sort((a, b) => b.score - a.score)
            .map(item => <TopListItem {...item} onVote={updateItemScore} />)}
        <ListItemInput onCreate={addNewItem} />
      </ul>
    </div>
  );
};

export default TopList;
