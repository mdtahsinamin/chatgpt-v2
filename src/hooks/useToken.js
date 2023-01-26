import React, { useEffect } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "./../firebase/firebase.config";
const auth = getAuth(app);
const useToken = () => {
  const [result] = useIdToken(auth);

  if (result) {
    localStorage.setItem("accessToken", result.accessToken);
    return result.accessToken;
  }
};

export default useToken;
