import { CssBaseline} from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Auth from "./views/Auth";
import {Home} from './views/Home'
import { Toaster } from "react-hot-toast";
import { TodosProvider } from "./components/todo/TodosContext";
import { PrivateOutlet } from "./routes/PrivateOutlet";
import { PublicOutlet } from "./routes/PublicOutlet";

function App() {
  return (
    <TodosProvider>
      <CssBaseline />
      <div><Toaster/></div>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/auth" element={<PublicOutlet />}>
          <Route index element={<Auth />} />
        </Route>
      </Routes>
    </TodosProvider>
  );
}

export default App;
