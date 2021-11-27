import { Button, CssBaseline, Typography } from "@mui/material";
import {Edit} from "@mui/icons-material"
import axios from './config/axios'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Typography variant="h3">Hola mundo</Typography>
      <Button variant="outlined">
        <Edit fontSize="4"/>
        Hola mundo</Button>
    </div>
  );
}

export default App;
