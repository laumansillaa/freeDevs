import {Routes, Route} from 'react-router-dom'
import Home from './components/home/home'
import Nav from './components/nav/nav';
import './App.css'



function App() {

  return (

    <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App;
