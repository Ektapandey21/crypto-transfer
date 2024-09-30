import{Navbar,Welcome,Footer,Services,Transaction} from './components';
const  App= ()=> {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
        <iframe
           src="https://webchat.botframework.com/embed/chat8867-bot?s=zkKj0Zq5MIM.xGq0Nlc7tn8jXwGPA1kRnGkvDpvquqICUIb7IXYfnuo"
          height="500px"
          style={{ border: 'none' }}
          allow="clipboard-write"
        ></iframe>
        
      </div>
      <Services/>
      <Transaction/>
      <Footer/>
     </div>
    
  )
}

export default App
