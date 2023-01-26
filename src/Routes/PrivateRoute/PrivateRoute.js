import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { getAuth } from "firebase/auth";
import app from "./../../firebase/firebase.config";
const auth = getAuth(app);
const PrivateRoute = ({ children }) => {
  const { loginIn } = useContext(AuthContext);
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (loginIn || user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
