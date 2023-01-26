import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import chatLogo from "../../asset/chatgpt.png";
import "./Home.css";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "./../../firebase/firebase.config";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#00897b",
    },
  },
});
const auth = getAuth(app);
const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <ThemeProvider theme={theme}>
      <div className="container d-flex justify-content-center home-section bg-white dark:bg-slate-800 ">
        <div>
          <Avatar
            alt="Remy Sharp"
            src={chatLogo}
            sx={{ width: 56, height: 56 }}
          />
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="dark:text-white">Welcome to ChatBot</p>
        <p className="dark:text-white">
          Log in with your Chatbot account to continue
        </p>
      </div>
      <div className="container d-flex justify-content-center mt-5">
        {!user && (
          <div>
            <Link to="auth/login" className="link">
              <Button
                variant="contained"
                color="secondary"
                className="dark:text-white"
              >
                Login
              </Button>
            </Link>
          </div>
        )}
        {!user && (
          <div className="home-section-btn">
            <Link to="/auth/register" className="link">
              <Button
                variant="contained"
                color="secondary"
                className="dark:text-white"
              >
                Register
              </Button>
            </Link>
          </div>
        )}
        <div>
          <Link to="/chatgpt" className="link">
            <Button
              variant="contained"
              color="secondary"
              className="dark:text-white"
            >
              Jump into Chatbot
            </Button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
