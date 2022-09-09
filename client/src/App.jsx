import Home from './components/home/home'
import './App.css'
import BackgroundParticles from './components/particles/index'
import Page from './components/page/page'
import Nav from './components/nav/nav';

function App() {


  return (

    <div className="App">
        {/* <BackgroundParticles/> */}

        <Nav/>
        
        <Home/>


    </div>
  )
}

export default App
