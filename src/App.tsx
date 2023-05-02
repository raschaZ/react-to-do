import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ToDo } from "./components/ToDo";
import "./App.css";

function App() {
  return (
    <Container>
      <Typography textAlign="center" variant="h3" mt={3} mb={5}>
        ToDo APP
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={4}>
          <ToDo />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
