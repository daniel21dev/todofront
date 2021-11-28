import { CssBaseline} from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Auth from "./views/Auth";
import {Home} from './views/Home'
import { Toaster } from "react-hot-toast";
import { TodosProvider } from "./components/todo/TodosContext";

function App() {
  return (
    <TodosProvider>
      <CssBaseline />
      <div><Toaster/></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </TodosProvider>
  );
}

export default App;
