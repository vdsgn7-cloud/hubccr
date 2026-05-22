import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth.jsx'

export default function Login() {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')
    setCarregando(true)

    const { error } = await signIn(email, senha)

    if (error) {
      setErro('E-mail ou senha incorretos.')
      setCarregando(false)
    } else {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ccr-blue-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-ccr-blue rounded-2xl mx-auto mb-3 flex items-center justify-center text-white font-semibold text-lg tracking-wide">
            CCR
          </div>
          <h1 className="text-base font-semibold text-ccr-blue">Hub de Soluções</h1>
          <p className="text-xs text-gray-500 mt-1">Colégio Cristo Rei</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block text-xs text-gray-600 mb-1">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu.nome@cristoreieduca.com.br"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-ccr-blue focus:ring-1 focus:ring-ccr-blue mb-3"
          />

          <label className="block text-xs text-gray-600 mb-1">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-ccr-blue focus:ring-1 focus:ring-ccr-blue mb-4"
          />

          {erro && (
            <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2 mb-3">
              {erro}
            </div>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-ccr-blue hover:bg-ccr-blue-dark text-white text-sm font-medium py-2.5 rounded-md transition-colors disabled:opacity-60"
          >
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          Problemas para acessar? Fale com a coordenação.
        </p>
      </div>
    </div>
  )
}
