import { useAuth } from '../lib/auth.jsx'
import { ferramentas } from '../lib/ferramentas'
import CardFerramenta from '../components/CardFerramenta'

export default function Dashboard() {
  const { user, signOut } = useAuth()

  const ativas = ferramentas.filter(f => f.categoria === 'ativa')
  const emBreve = ferramentas.filter(f => f.categoria === 'em-breve')

  const inicial = (user?.email || 'U')[0].toUpperCase()
  const nomeCurto = user?.email?.split('@')[0] || 'Usuário'

  return (
    <div className="min-h-screen bg-ccr-blue-50">
      {/* Header */}
      <header className="bg-ccr-blue text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center text-xs font-semibold">
              CCR
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">Hub de Soluções</p>
              <p className="text-xs opacity-75 leading-tight">Colégio Cristo Rei</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs hidden sm:inline">{nomeCurto}</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-medium">
              {inicial}
            </div>
            <button
              onClick={signOut}
              className="text-xs px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            Olá, {nomeCurto} 👋
          </h2>
          <p className="text-sm text-gray-500">
            Acesse as ferramentas e sistemas do Colégio Cristo Rei.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-sm font-medium text-gray-600 mb-3 ml-1">Ferramentas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ativas.map(f => (
              <CardFerramenta key={f.id} ferramenta={f} />
            ))}
          </div>
        </section>

        {emBreve.length > 0 && (
          <section>
            <h3 className="text-sm font-medium text-gray-600 mb-3 ml-1">Em breve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {emBreve.map(f => (
                <CardFerramenta key={f.id} ferramenta={f} />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-6 text-center text-xs text-gray-400">
        Colégio Cristo Rei • Pindoretama/CE
      </footer>
    </div>
  )
}
