import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "a7215f82-7ec1-475a-a853-2213dd03544c", // Replace with your Application (client) ID
    authority: "https://krrypt.b2clogin.com/krrypt.onmicrosoft.com/B2C_1_SignUpSignin", // Replace with your tenant and user flow
    redirectUri: "https://kind-dune-0ed52c010.5.azurestaticapps.net", // Your deployed app URL
    
  },
  cache: {
    cacheLocation: "sessionStorage", // or localStorage
    storeAuthStateInCookie: false, // Set this to true if dealing with IE11 or Edge
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
