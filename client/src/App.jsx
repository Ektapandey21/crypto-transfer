import{Navbar,Welcome,Footer,Services,Transaction} from './components';

import { SignInButton, SignOutButton } from './AuthButtons.jsx';
import AuthStatus from './AuthStatus.jsx';


const  App= ()=> {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
  
      <AuthStatus style={{ color: 'yellow' }}/>  {/* Check authentication status */}
      <SignInButton style={{ color: 'blue' }}/> {/* Button for signing in */}
      <SignOutButton style={{ color: 'green' }}/>

        <Welcome/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe src="https://webchat.botframework.com/embed/chat8867-bot?s=zkKj0Zq5MIM.FhfVG6kB4UejSRo_U68mkLy4B3g0UywIfr7Hx-KVG5k" 
        //style="height: 502px; max-height: 502px;"
        style={{ width: '600px', height: '502px', maxHeight: '502px',  backgroundColor: '#f4f4f4' }}/>
        </div>
         </div>
      <Services/>
      <Transaction/>
      <Footer/>
      
     </div>
    
  )
}

export default App ;