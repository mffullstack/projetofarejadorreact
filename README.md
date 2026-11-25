# Projeto Farejador

Ambiente ReactJS idêntico ao do projeto sitereact, utilizando Vite, React Router e ESLint.

## Estrutura

```
projetofarejador/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── App.css
└── .gitignore
```

## Configuração

### Instalar dependências
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Lint
```bash
npm lint
```

## Docker

### Build da imagem
```bash
docker build -t projetofarejador .
```

### Executar container
```bash
docker run -it -v $(pwd):/app -p 5173:5173 projetofarejador
```

## Dependências

- **React** 19.2.8
- **React DOM** 19.2.8
- **React Router DOM** 7.18.4
- **Vite** 8.2.2
- **Clerk React** 6.18.1
- **Lucide React** 1.61.0
- **PostHog JS** 1.444.0
- **ESLint** 10.9.0
