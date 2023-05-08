import { useForm } from "react-hook-form";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import { EN } from "../lang/EN";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const submitForm = (data: any) => {
    dispatch(login(data));
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(submitForm)} className="content">
          <Grid
            container
            rowSpacing={5}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={12}>
              <Typography variant="h3">{EN.login}</Typography>
            </Grid>{" "}
            <Grid item md={12}>
              <TextField
                {...register("email")}
                label={EN.email}
                type="email"
                required
              ></TextField>
            </Grid>
            <Grid item md={12}>
              <TextField
                {...register("password")}
                label={EN.password}
                type="password"
                required
              ></TextField>
            </Grid>
            <Grid item md={12}>
              <Button variant="contained" type="submit">
                {EN.login}
              </Button>
            </Grid>
          </Grid>
        </form>{" "}
      </Container>
    </>
  );
};
export default Login;
