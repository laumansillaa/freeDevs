import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/nav';
import Servicie from './components/Servicie/Servicie'
import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'


function App() {

  return (

    <div className="App">
        <Nav/>
          <Home/>
          <Servicie/>
          <Contact/> 
          <Footer/>
    </div>
  )
}

export default App;
