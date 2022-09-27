import Home from './components/home/home'
import Nav from './components/nav/nav';
import Servicie from './components/Servicie/Servicie'
import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
import About from "./components/about/About"

function App() {

  return (

    <div className="App" id='inicio'>
        <Nav/>
          <Home id="home"/>
          <About id="about"/>
          <Servicie id="servicio"/>
          <Contact id="contact"/> 
          <Footer/>
    </div>
  )
}

export default App;
