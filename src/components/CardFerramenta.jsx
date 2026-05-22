export default function CardFerramenta({ ferramenta }) {
  const emBreve = ferramenta.categoria === 'em-breve'

  const conteudo = (
    <>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 ${emBreve ? 'bg-gray-100' : 'bg-ccr-blue-light'}`}>
        {ferramenta.icone}
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-1">{ferramenta.nome}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{ferramenta.descricao}</p>
    </>
  )

  const classeBase = "block bg-white rounded-xl border border-gray-200 p-5 transition-all duration-150"
  const classeAtiva = "hover:border-ccr-blue hover:shadow-md cursor-pointer"
  const classeBreve = "opacity-60 cursor-not-allowed"

  if (emBreve) {
    return <div className={`${classeBase} ${classeBreve}`}>{conteudo}</div>
  }

  if (ferramenta.externo) {
    return (
      <a
        href={ferramenta.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${classeBase} ${classeAtiva}`}
      >
        {conteudo}
      </a>
    )
  }

  return (
    <a href={ferramenta.url} className={`${classeBase} ${classeAtiva}`}>
      {conteudo}
    </a>
  )
}
