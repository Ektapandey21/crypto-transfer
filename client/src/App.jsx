import{Navbar,Welcome,Footer,Services,Transaction} from './components';
const  App= ()=> {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
        <iframe src="https://webchat.botframework.com/embed/chat8867-bot?s=zkKj0Zq5MIM.FhfVG6kB4UejSRo_U68mkLy4B3g0UywIfr7Hx-KVG5k" style="height: 502px; max-height: 502px;"/>
         </div>
      <Services/>
      <Transaction/>
      <Footer/>
      
     </div>
    
  )
}

export default App ;