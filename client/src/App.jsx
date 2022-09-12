import {Routes, Route} from 'react-router-dom'
import Home from './components/home/home'
import Nav from './components/nav/nav';
import './App.css'
import BackgroundParticles from './components/particles';
// import Footer from './components/footer/footer';

function App() {

  return (

    <div className="App">
        <Nav/>
          <BackgroundParticles/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
