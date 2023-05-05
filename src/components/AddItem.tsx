import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { createTask } from "../redux/actions/todo";
import { useState } from "react";
import { useSelector } from "react-redux";
import EN from "../lang/EN.json";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

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
  const addTask = (event: any) => setValue(event.target.value);
  console.log(todo.todo);

  return (
    <>
      <Grid
        container
        sx={{
          margin: 2,
        }}
      >
        <Grid item xs={8}>
          {" "}
          <TextField
            className="input"
            label={EN.addtask}
            value={value}
            onChange={addTask}
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" size="large" onClick={onSubmit}>
            {EN.add}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AddItem;
