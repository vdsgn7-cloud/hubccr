# Hub de Soluções — Colégio Cristo Rei

Dashboard centralizado para acesso às ferramentas internas e sistemas do Colégio Cristo Rei, com login via Supabase.

## Stack

- **Vite + React 18** — frontend
- **Tailwind CSS** — estilização (cor principal: `#1B3A6B`)
- **Supabase** — autenticação por email/senha
- **React Router** — rotas (`/login` e `/`)
- **Deploy:** Vercel

---

## Passo a passo (do zero ao deploy)

### 1. Criar o projeto no Supabase

1. Acesse [supabase.com](https://supabase.com) e crie um novo projeto.
2. Em **Project Settings → API**, copie:
   - `Project URL` → vai em `VITE_SUPABASE_URL`
   - `anon public key` → vai em `VITE_SUPABASE_ANON_KEY`
3. Em **Authentication → Providers**, garanta que **Email** está habilitado.
4. (Opcional) Em **Authentication → Settings**, desative "Enable email confirmations" pra agilizar testes no início. Reative depois.

### 2. Criar os usuários do colégio

Em **Authentication → Users → Add user**, crie uma conta para cada pessoa que vai usar o hub (você, coordenação, professores etc).

Defina email + senha. Eles vão poder trocar a senha depois.

### 3. Rodar localmente

```bash
npm install
cp .env.example .env.local
# edite .env.local com suas credenciais do Supabase
npm run dev
```

Abra `http://localhost:5173`.

### 4. Subir no GitHub

```bash
git init
git add .
git commit -m "primeira versão do hub"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/ccr-hub.git
git push -u origin main
```

### 5. Deploy na Vercel

1. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e importe o repo.
2. Em **Environment Variables**, adicione:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Clique em **Deploy**.

Pronto. Sugiro um domínio tipo `hub.cristoreieduca.com.br`.

---

## Como adicionar uma nova ferramenta

Edite o arquivo `src/lib/ferramentas.js` e adicione um objeto novo no array `ferramentas`:

```js
{
  id: 'minha-ferramenta',
  nome: 'Minha Ferramenta',
  descricao: 'O que ela faz',
  icone: '🛠️',
  url: 'https://link-da-ferramenta.com',
  externo: true,
  categoria: 'ativa', // ou 'em-breve'
}
```

Commit + push → a Vercel republica sozinha.

---

## Estrutura

```
src/
├── App.jsx                   ← rotas
├── main.jsx                  ← entrada do app
├── index.css                 ← Tailwind
├── lib/
│   ├── supabase.js           ← cliente Supabase
│   ├── auth.jsx              ← contexto e hook de autenticação
│   └── ferramentas.js        ← lista central de ferramentas
├── components/
│   ├── CardFerramenta.jsx    ← card individual
│   └── RotaProtegida.jsx     ← bloqueia acesso sem login
└── pages/
    ├── Login.jsx
    └── Dashboard.jsx
```

---

## Próximos passos sugeridos

- [ ] Adicionar foto/avatar do usuário (`profiles` table no Supabase)
- [ ] Página de perfil com troca de senha
- [ ] Diferentes perfis (admin, coordenação, professor) com ferramentas por permissão
- [ ] Migrar ferramentas externas pra dentro do hub (formatador de provas, pautas, capas)
- [ ] Histórico de uso por ferramenta
