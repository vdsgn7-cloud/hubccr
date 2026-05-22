import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './lib/auth.jsx'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import RotaProtegida from './components/RotaProtegida'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RotaProtegida>
              <Dashboard />
            </RotaProtegida>
          }
        />
      </Routes>
    </AuthProvider>
  )
}
