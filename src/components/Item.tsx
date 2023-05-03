import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../redux/actions/todo";
import { AppDispatch } from "../app/store";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type ItemProps = {
  todo: Todo;
};

const Item = ({ todo }: ItemProps) => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const removeTask = () => {
    dispatch(deleteTask(todo.id));
  };

  const doneTask = () => {
    // const addTaskBtn = document.getElementById("addTaskBtn")!;
    if (!todo.completed) {
      dispatch(completeTask(todo.id));
    }
  };
  return (
    <>
      <div className="content">
        <div
          className={`${todo.completed ? "complete" : "open"}`}
          id={todo.id.toString()}
        >
          {todo.title}{" "}
        </div>
        <div>
          <button
            disabled={todo.completed}
            className="complete-task-button"
            onClick={() => {
              doneTask();
            }}
          >
            Complete
          </button>
          <button
            className="remove-task-button"
            onClick={() => {
              removeTask();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
