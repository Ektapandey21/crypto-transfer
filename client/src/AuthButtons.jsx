// src/AuthButtons.jsx

import React from "react";
import { useMsal } from "@azure/msal-react";

const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect();  // Redirect user to login page
  };

  return <button onClick={handleLogin}>Sign In</button>;
};

const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect();  // Redirect user to logout
  };

  return <button onClick={handleLogout}>Sign Out</button>;
};

export { SignInButton, SignOutButton };
