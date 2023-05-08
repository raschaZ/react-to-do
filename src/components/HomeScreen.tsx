import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ToDo } from "./ToDo";
import { EN } from "../lang/EN";

const Home = () => {
  return (
    <>
      <Typography textAlign="center" variant="h3" mt={3} mb={5}>
        {EN.app_name}
      </Typography>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sx={{ width: "inherit" }}>
          <ToDo />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
