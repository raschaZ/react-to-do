import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { createTask, getTasks } from "../redux/actions/todo";
import { useState } from "react";
import { useSelector } from "react-redux";

const AddItem = () => {
  const [value, setValue] = useState("");

  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (value?.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }

    dispatch(createTask(value.trim()));

    setValue("");
  };
  const todo = useSelector((state: any) => state.todoSlice);
  console.log(todo.todo);

  return (
    <>
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button className="task-button" onClick={onSubmit}>
        Add
      </button>
    </>
  );
};

export default AddItem;
