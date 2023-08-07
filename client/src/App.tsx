import { Routes, Route } from 'react-router-dom'
import { Dummy } from './pages/Dummy'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/dummy" element={<Dummy />}/>
        <Route path="/" element={<LoginPage />}/>
      </Routes>
    </>
  )
}

export default App
