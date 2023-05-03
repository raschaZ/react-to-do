import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { getTasks } from "../redux/actions/todo";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import AddItem from "./AddItem";

export function ToDo() {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const todo = useSelector((state: any) => state.todoSlice);
  console.log(todo.todo);

  return (
    <>
      <Typography mb={3}>All todo tasks:{todo?.todo?.length} </Typography>
      <AddItem />
      <div>
        {todo?.todo?.map((item: any) => (
          <Item key={item.id} todo={item} />
        ))}
      </div>
    </>
  );
}
