import { Button, CssBaseline, Typography } from "@mui/material";
import axios from './config/axios'
import { Navbar } from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Auth from "./views/Auth";
import {Home} from './views/Home'
import { Toaster } from "react-hot-toast";

function App() {
  const isLoggedIn = !!localStorage.getItem('token');
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
