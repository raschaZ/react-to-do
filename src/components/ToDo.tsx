import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { getTasks } from "../redux/actions/todo";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import AddItem from "./AddItem";
import EN from "../lang/EN.json";
import { Grid } from "@mui/material";

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
      <Grid className="todo">
        <Grid item xs={12}>
          <Typography m={3}>
            {EN.title}:{count}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <AddItem />
        </Grid>
        <Grid item xs={12}>
          {todo?.todo?.map((item: any) => (
            <Item key={item.id} todo={item} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
