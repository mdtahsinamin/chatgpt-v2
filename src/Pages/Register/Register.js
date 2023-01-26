import React, { useContext, useEffect, useState } from "react";
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
import chatLogo from "../../asset/chatgpt.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";
import { async } from "@firebase/util";
import { AuthContext } from "./../../contexts/AuthProvider";
import useToken from "./../../hooks/useToken";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#00897b",
    },
  },
});

const auth = getAuth(app);

const Register = () => {
  const { register, handleSubmit } = useForm();

  const { loginIn, setLoginIn } = useContext(AuthContext);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [signInWithGoogle, result] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const accessToken = useToken();

  // form submit
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    sendEmailVerification(data.email);
    const newUser = {
      displayName: "Tahsin Amin",
      email: user?.email,
      photoURL:
        "https://lh3.googleusercontent.com/a/AEdFTp6ZrIqysqDAlBVExrLp0-f70zX2lAjFjsm7B4UJ=s96-c",
    };
    setLoginIn(...loginIn, newUser);
  };

  // google auth
  const googleLoginClick = async () => {
    await signInWithGoogle();
    const newUser = {
      displayName: result?.user.displayName,
      email: result?.user.email,
      photoURL: result?.user.photoURL,
    };
    setLoginIn(...loginIn, newUser);
  };

  useEffect(() => {
    if (user) {
      toast.success("Register Done");
    }
    if (sending) {
      toast.success("Mail Sent");
    }
  }, [user, sending]);

  if (accessToken) {
    navigate("/chatgpt");
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
                  <span className="span-login">If you have an account?</span>
                  <Link to="/auth/login" className="link">
                    Login in
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
      <Toaster />
    </ThemeProvider>
  );
};

export default Register;
