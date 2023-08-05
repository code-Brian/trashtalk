import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import {Dummy} from './pages/Dummy'

function App() {
  return (
    <>
      <h1>HENLO FROM CLIENT APP</h1>
      <Link to="/">Dummy</Link>
      <Routes>
        <Route path="/" element={<Dummy />}/>
      </Routes>
    </>
  )
}

export default App
