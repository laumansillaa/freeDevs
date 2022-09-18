import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/nav';
import Service from './components/Servicie/Servicie'
import './App.css'
import Servicie from './components/Servicie/Servicie';
import Footer from './components/footer/footer'


function App() {

  return (

    <div className="App">
        <Nav/>
          <Home/>
          <Servicie/>
          <Footer/>
    </div>
  )
}

export default App;
