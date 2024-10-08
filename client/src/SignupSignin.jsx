import { useMsal } from "@azure/msal-react";
import React from "react";

const SignInButton = () => {
  const { instance } = useMsal();
  
  const handleLogin = () => {
    instance.loginRedirect(); // Or instance.loginPopup() for popup login
    
  };
  return <button onClick={handleLogin}>Sign In</button>;
  
};

const SignOutButton = () => {
  const { instance } = useMsal();
  
  const handleLogout = () => {
    instance.logoutRedirect(); // Or instance.logoutPopup() for popup logout
  };

  return <button onClick={handleLogout}>Sign Out</button>;
};

export { SignInButton, SignOutButton };
