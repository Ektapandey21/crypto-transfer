import{Navbar,Welcome,Footer,Services,Transaction} from './components';
const  App= ()=> {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
        <iframe src='https://webchat.botframework.com/embed/chat8867-bot?s=SWaUa-fyUPM.lOeQ3tq54U6F5Py-oFAV1wexe5mdKjTEJV_sQrl8HE0'  style='min-width: 400px; width: 100%; min-height: 500px;'>
        </iframe>
         </div>
      <Services/>
      <Transaction/>
      <Footer/>
     </div>
    
  )
}

export default App 
