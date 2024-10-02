// src/AuthStatus.jsx

import React from 'react';
import { useMsal } from "@azure/msal-react";

const AuthStatus = () => {
  const { accounts } = useMsal();  // Get the current accounts

  // Check if the user is authenticated
  const isAuthenticated = accounts.length > 0;

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome {accounts[0].username}</p>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
};

export default AuthStatus;

