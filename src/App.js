import { Button, CssBaseline, Typography } from "@mui/material";
import axios from './config/axios'
import { Navbar } from "./components/layout/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "./views/Auth";
import {Home} from './views/Home'

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
