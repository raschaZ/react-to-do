import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../redux/actions/todo";
import { AppDispatch } from "../app/store";
import { EN } from "../lang/EN";
import { Button, Grid, Typography } from "@mui/material";
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
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        p={1}
        justifyContent="center"
      >
        <Grid item xs={12} sm={6}>
          <Typography
            className={`${todo.completed ? "complete" : "open"}`}
            id={todo.id.toString()}
            variant="h6"
          >
            {todo.title}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            size="small"
            disabled={todo.completed}
            onClick={doneTask}
          >
            {EN.complete}
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={removeTask}
          >
            {EN.delete}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Item;
