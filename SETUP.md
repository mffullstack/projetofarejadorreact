# Guia de Setup - Projeto Farejador

Este projeto foi criado seguindo a mesma estrutura e configuração do projeto **sitereact**.

## 🚀 Quick Start com Docker

### 1. Build da imagem Docker
```bash
docker build -t projetofarejador .
```

### 2. Criar e executar o container
```bash
docker run -it --name projetofarejador -v $(pwd):/app -p 5173:5173 projetofarejador
```

### 3. Dentro do container, instalar dependências
```bash
npm install
```

### 4. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```

Acesse: http://localhost:5173

---

## 🐳 Usando Docker Compose

### 1. Build e iniciar
```bash
docker-compose up -d
```

### 2. Executar commands no container
```bash
docker-compose exec projetofarejador npm install
docker-compose exec projetofarejador npm run dev
```

### 3. Parar o container
```bash
docker-compose down
```

---

## 📦 Instalação Local (sem Docker)

### 1. Instalar dependências
```bash
npm install
```

### 2. Desenvolvimento
```bash
npm run dev
```

### 3. Build para produção
```bash
npm run build
```

---

## 📁 Estrutura do Projeto

```
projetofarejador/
├── Dockerfile                 # Configuração Docker
├── docker-compose.yml         # Docker Compose
├── package.json              # Dependências
├── vite.config.js            # Configuração Vite
├── eslint.config.js          # Configuração ESLint
├── index.html                # HTML principal
├── .dockerignore              # Arquivos ignorados no Docker
├── .gitignore                # Arquivos ignorados no Git
├── .env.example              # Exemplo de variáveis de ambiente
├── public/
│   └── favicon.svg           # Favicon
└── src/
    ├── main.jsx              # Entrada principal
    ├── App.jsx               # Componente principal
    ├── index.css             # Estilos globais
    ├── App.css               # Estilos do App
    ├── pages/                # Páginas
    ├── components/           # Componentes reutilizáveis
    ├── context/              # Context API
    └── services/             # Serviços (API, etc)
```

---

## 🔧 Configuração de Variáveis de Ambiente

1. Copie `.env.example` para `.env.local`
```bash
cp .env.example .env.local
```

2. Edite `.env.local` com suas configurações

3. As variáveis com prefixo `VITE_` são expostas ao cliente

---

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Preview do build |
| `npm run lint` | Verifica erros com ESLint |

---

## 🛠️ Tecnologias

- **React** 19.2.8
- **Vite** 8.2.2 (Build tool)
- **React Router DOM** 7.18.4 (Routing)
- **Clerk** 6.18.1 (Autenticação)
- **Lucide React** 1.61.0 (Icons)
- **PostHog** 1.444.0 (Analytics)
- **ESLint** 10.9.0 (Linting)

---

## 🐳 Comparação com sitereact

Este projeto mantém **100% de compatibilidade** com a configuração do `sitereact`:

✅ Mesma versão do Node (node:26-bookworm)
✅ Mesma porta exposta (5173)
✅ Mesmas dependências
✅ Mesma configuração Vite
✅ Mesma configuração ESLint
✅ Mesma estrutura de pastas

---

## ❓ Troubleshooting

### Container não inicia
```bash
docker logs projetofarejador
```

### Porta 5173 já em uso
```bash
docker-compose down  # Para container anterior
```

### node_modules corrompido
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Referências

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Docker Documentation](https://docs.docker.com/)
