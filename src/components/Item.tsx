import React from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type ItemProps = {
  todo: Todo;
};

const Item = ({ todo }: ItemProps) => {
  return <div className="item">{todo.title}</div>;
};

export default Item;
