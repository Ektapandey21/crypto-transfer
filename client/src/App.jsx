// import{Navbar,Welcome,Footer,Services,Transaction} from './components';

// import { SignInButton, SignOutButton } from './AuthButtons.jsx';
// import AuthStatus from './AuthStatus.jsx';


// const  App= ()=> {
//   return (
//     <div className='min-h-screen'>
//       <div className='gradient-bg-welcome'>
//         <Navbar/>
  
//       <AuthStatus style={{ color: 'yellow' }}/>  {/* Check authentication status */}
//       <SignInButton style={{ color: 'blue' }}/> {/* Button for signing in */}
//       <SignOutButton style={{ color: 'green' }}/>

//         <Welcome/>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <iframe src="https://webchat.botframework.com/embed/chat8867-bot?s=zkKj0Zq5MIM.FhfVG6kB4UejSRo_U68mkLy4B3g0UywIfr7Hx-KVG5k" 
//         //style="height: 502px; max-height: 502px;"
//         style={{ width: '600px', height: '502px', maxHeight: '502px',  backgroundColor: '#f4f4f4' }}/>
//         </div>
//          </div>
//       <Services/>
//       <Transaction/>
//       <Footer/>
      
//      </div>
    
//   )
// }

// export default App ;

//chatgpt
import React, { useEffect } from 'react';
import { useMsal } from "@azure/msal-react";
import { Navbar, Welcome, Footer, Services, Transaction } from './components';
import { SignInButton, SignOutButton } from './AuthButtons.jsx';
import AuthStatus from './AuthStatus.jsx';

const App = () => {
  const { instance, accounts } = useMsal();

  useEffect(() => {
    const login = async () => {
      if (accounts.length === 0) {
        await instance.loginRedirect(); // Redirect to login if not authenticated
      } else {
        // Acquire token silently
        try {
          const response = await instance.acquireTokenSilent({
            scopes: ["api://3b931d57-6b90-4faf-9067-82e1ca076957/access_as_user"],
            account: accounts[0],
          });
          console.log("Token acquired: ", response.accessToken);
          // Use the token as needed
        } catch (error) {
          console.error("Token acquisition failed: ", error);
        }
      }
    };

    login();
  }, [accounts, instance]);

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <AuthStatus style={{ color: 'yellow' }} />
        <SignInButton style={{ color: 'blue' }} />
        <SignOutButton style={{ color: 'green' }} />
        <Welcome />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe 
            src="https://webchat.botframework.com/embed/chat8867-bot?s=zkKj0Zq5MIM.FhfVG6kB4UejSRo_U68mkLy4B3g0UywIfr7Hx-KVG5k"
            style={{ width: '600px', height: '502px', maxHeight: '502px', backgroundColor: 'black' }}
          />
        </div>
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;
