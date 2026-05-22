// Lista central de ferramentas do hub.
// Para adicionar uma nova ferramenta, basta acrescentar um objeto a este array.
//
// Campos:
//   id          → identificador único
//   nome        → título do card
//   descricao   → subtítulo curto
//   icone       → emoji ou caracter (substitua por ícone SVG se preferir)
//   url         → para onde o card aponta (link externo ou rota interna)
//   externo     → true abre em outra aba, false navega dentro do hub
//   categoria   → "ativa" mostra no bloco principal, "em-breve" mostra desabilitada
//   destaque    → opcional, badge no canto do card (ex: "Novo")

export const ferramentas = [
  {
    id: 'formatador-provas',
    nome: 'Formatador de Provas',
    descricao: 'Padroniza AB, AP e avaliações',
    icone: '📄',
    url: 'https://claude.ai',
    externo: true,
    categoria: 'ativa',
  },
  {
    id: 'formatador-pautas',
    nome: 'Formatador de Pautas',
    descricao: 'Pautas mensais com identidade da escola',
    icone: '📋',
    url: 'https://claude.ai',
    externo: true,
    categoria: 'ativa',
  },
  {
    id: 'capas-documentos',
    nome: 'Capas e Documentos',
    descricao: 'Geração em lote de capas escolares',
    icone: '📁',
    url: 'https://claude.ai',
    externo: true,
    categoria: 'ativa',
  },
  {
    id: 'siga',
    nome: 'SIGA',
    descricao: 'Sistema acadêmico',
    icone: '🎓',
    url: 'https://siga.activesoft.com.br/login/?instituicao=CRISTOREICE',
    externo: true,
    categoria: 'ativa',
  },
  {
    id: 'ionica',
    nome: 'Iônica',
    descricao: 'Biblioteca digital',
    icone: '📚',
    url: 'https://colegiocristoreice.souionica.com.br/library',
    externo: true,
    categoria: 'ativa',
  },
  {
    id: 'classroom',
    nome: 'Google Classroom',
    descricao: 'Sala de aula virtual',
    icone: '🏫',
    url: 'https://classroom.google.com/u/0/h?hl=pt-BR',
    externo: true,
    categoria: 'ativa',
  },
  {
    id: 'site-escola',
    nome: 'Site do Colégio',
    descricao: 'cristoreieduca.com.br',
    icone: '🌐',
    url: 'https://cristoreieduca.com.br',
    externo: true,
    categoria: 'ativa',
  },
  {
    id: 'nova-ferramenta',
    nome: 'Nova ferramenta',
    descricao: 'Em desenvolvimento',
    icone: '✨',
    url: '#',
    externo: false,
    categoria: 'em-breve',
  },
]
