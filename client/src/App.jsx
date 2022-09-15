import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/nav';
import Footer from './components/footer/footer'
import BackgroundParticles from './components/particles';
import './App.css'


function App() {


  return (

    <div className="App">
        <Nav/>
          <Routes path='/'>
            <Route path='/' element={<Home/>}/>
          </Routes>
    </div>
  )
}

export default App
