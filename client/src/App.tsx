import { Routes, Route } from 'react-router-dom'
import { Dummy } from './pages/Dummy'
import { LoginPage } from './pages/LoginPage'
import { Trashboard } from './pages/Trashboard'
import { RegisterForm } from './components/RegisterForm'

function App() {
  return (
    <>
      <Routes>
        <Route path="/dummy" element={<Dummy />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/trashboard" element={<Trashboard />}/>
        <Route path="/register" element={<RegisterForm />}/>
      </Routes>
    </>
  )
}

export default App
