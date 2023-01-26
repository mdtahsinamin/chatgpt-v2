import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ChatGPT from "./Pages/ChatGPT/ChatGPT";
import Home from "./Pages/Home/Home";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";
import MainGPT from "./Pages/ChatGPT/MainGPT";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<Register />}></Route>
        <Route
          path="/chatgpt"
          element={
            <PrivateRoute>
              <MainGPT />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
