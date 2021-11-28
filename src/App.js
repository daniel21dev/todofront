import { CssBaseline} from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Auth from "./views/Auth";
import {Home} from './views/Home'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <CssBaseline />
      <div><Toaster/></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
