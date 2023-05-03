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
  const todo = useSelector((state: any) => state.todoSlice);

  let count = todo?.todo?.length;
  useEffect(() => {
    dispatch(getTasks());
  }, [count]);

  return (
    <>
      <Typography mb={3}>All todo tasks:{count} </Typography>
      <AddItem />
      <div>
        {todo?.todo?.map((item: any) => (
          <Item key={item.id} todo={item} />
        ))}
      </div>
    </>
  );
}
