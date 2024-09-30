import{Navbar,Welcome,Footer,Services,Transaction} from './components';
const  App= ()=> {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
        <iframe>
          src="<iframe src='https://webchat.botframework.com/embed/chat8867-bot?s=YOUR_SECRET_HERE'></iframe>" // Replace this with your actual embedded code URL
          width="100%"
          height="500px"
          style={{ border: 'none' }}
          allow="clipboard-write"
        </iframe>
      </div>
      <Services/>
      <Transaction/>
      <Footer/>
     </div>
    
  )
}

export default App
