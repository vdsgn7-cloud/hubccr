import { Navigate } from 'react-router-dom'
import { useAuth } from '../lib/auth.jsx'

export default function RotaProtegida({ children }) {
  const { session, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ccr-blue-50">
        <div className="text-ccr-blue text-sm">Carregando...</div>
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return children
}
