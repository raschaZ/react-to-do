import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ToDo } from "./ToDo";
import EN from "../lang/EN.json";

const Home = () => {
  return (
    <>
      <Typography textAlign="center" variant="h3" mt={3} mb={5}>
        {EN.app_name}
      </Typography>
      <Grid
        container
        rowSpacing={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <ToDo />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
