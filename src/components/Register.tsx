import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { registerUser } from "../redux/actions/auth";
import { AppDispatch } from "../app/store";
import { EN } from "../lang/EN";
import { Button, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Register = () => {
  const { loading } = useSelector((state: any) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm();

  const submitForm = (data: any) => {
    // check if passwords match
    console.log(data);
    if (data.password !== data.confirmPassword) {
      alert("Password mismatch");
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
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
              <Typography variant="h3">{EN.register}</Typography>{" "}
            </Grid>
            <Grid item md={12}>
              <TextField
                label={EN.firstName}
                type="text"
                variant="outlined"
                {...register("firstName", { required: true })}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                label={EN.email}
                type="email"
                variant="outlined"
                {...register("email", { required: true })}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                label={EN.password}
                type="password"
                variant="outlined"
                {...register("password", { required: true })}
              />
            </Grid>{" "}
            <Grid item md={12}>
              <TextField
                label={EN.confirmPassword}
                type="password"
                variant="outlined"
                {...register("confirmPassword", { required: true })}
              />
            </Grid>
            <Grid item md={12}>
              <Button variant="contained" disabled={loading} type="submit">
                {" "}
                {loading ? <Spinner /> : "Register"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};
export default Register;
