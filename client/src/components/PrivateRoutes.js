import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../config/firebase-config";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthState(auth);

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="SignIn" />;
  }
  return children;
};

export default PrivateRoute;