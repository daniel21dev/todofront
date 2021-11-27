import { Button, CssBaseline, Typography } from "@mui/material";
import {Edit} from "@mui/icons-material"
import axios from './config/axios'
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Typography variant="h3">Hola mundo</Typography>
      <Button variant="outlined">
        <Edit fontSize="4"/>
        Hola mundo</Button>
    </>
  );
}

export default App;
