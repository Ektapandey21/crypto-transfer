import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { MsalProvider } from "@azure/msal-react";
import msalInstance from "./AuthConfig.js";

import{TransactionProvider}from './context/TransactionContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <TransactionProvider>
  <React.StrictMode>
  <MsalProvider instance={msalInstance}>
    <App />
    </MsalProvider>
  </React.StrictMode>
  </TransactionProvider>
  ,
  
)