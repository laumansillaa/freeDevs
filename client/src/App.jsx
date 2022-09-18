import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/nav';
import Service from './components/Servicie/Servicie'
import './App.css'
import About from './components/about/About';



function App() {

  return (

    <div className="App">
        <Nav/>
        <Home/>
        <Service/>
        <About/>
    </div>
  )
}

export default App;
