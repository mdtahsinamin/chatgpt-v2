import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import chatLogo from "../../asset/chatgpt.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { getAuth } from "firebase/auth";
import app from "./../../firebase/firebase.config";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "./../../hooks/useToken";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#00897b",
    },
  },
});
const auth = getAuth(app);

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { loginIn, setLoginIn } = useContext(AuthContext);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, result] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/chatgpt";

  const accessToken = useToken();

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    const newUser = {
      displayName: "Tahsin Amin",
      email: user?.email,
      photoURL:
        "https://lh3.googleusercontent.com/a/AEdFTp6ZrIqysqDAlBVExrLp0-f70zX2lAjFjsm7B4UJ=s96-c",
    };
    setLoginIn(...loginIn, newUser);
  };

  const googleLoginClick = async () => {
    await signInWithGoogle();
    const newUser = {
      displayName: result?.user.displayName,
      email: result?.user.email,
      photoURL: result?.user.photoURL,
    };
    setLoginIn(...loginIn, newUser);
  };
  if (accessToken) {
    navigate(from, { replace: true });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="logo-section">
            <Avatar
              alt="Remy Sharp"
              src={chatLogo}
              sx={{ width: 56, height: 56 }}
            />
          </div>
          <div className="welcome-section">
            <h2>Welcome back</h2>
          </div>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email")}
                />
              </Grid>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  color="secondary"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{ display: "block" }}
                  {...register("password")}
                />
              </Grid>
              <Grid
                item
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  component="p"
                  variant="p"
                  justifyContent="center"
                  alignItems="center"
                >
                  <span className="span-login"> Don't have an account?</span>
                  <Link to="/auth/register" className="link">
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2, p: 2 }}
              >
                Continue
              </Button>

              <div className="">
                <p className="hr">
                  <span className="or-section">OR</span>
                </p>
              </div>

              <Button
                color="secondary"
                variant="outlined"
                fullWidth
                sx={{ mt: 3, mb: 2, p: 1 }}
                onClick={googleLoginClick}
              >
                <span className="google-login">
                  <FcGoogle />
                </span>
                Continue with Google
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
