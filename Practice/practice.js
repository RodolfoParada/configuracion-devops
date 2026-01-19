// Practical exercise to apply the concepts learned.
// Configuración básica de proyecto con DevOps:

// # .github/workflows/ci.yml - Pipeline básico
// name: CI

// on:
//   push:
//     branches: [ main, develop ]
//   pull_request:
//     branches: [ main ]

// jobs:
//   test:
//     runs-on: ubuntu-latest

//     strategy:
//       matrix:
//         node-version: [16.x, 18.x]

//     steps:
//     - uses: actions/checkout@v3

//     - name: Use Node.js ${{ matrix.node-version }}
//       uses: actions/setup-node@v3
//       with:
//         node-version: ${{ matrix.node-version }}
//         cache: 'npm'

//     - name: Install dependencies
//       run: npm ci

//     - name: Run linter
//       run: npm run lint

//     - name: Run tests
//       run: npm run test:coverage

//     - name: Build application
//       run: npm run build
// # Dockerfile básico
// FROM node:18-alpine

// WORKDIR /app

// COPY package*.json ./
// RUN npm ci --only=production

// COPY . .

// EXPOSE 3000

// HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
//   CMD curl -f http://localhost:3000/health || exit 1

// CMD ["npm", "start"]
// # Scripts de calidad en package.json
// {
//   "scripts": {
//     "dev": "next dev",
//     "build": "next build",
//     "start": "next start",
//     "lint": "next lint",
//     "lint:fix": "next lint --fix",
//     "test": "jest",
//     "test:coverage": "jest --coverage --watchAll=false",
//     "test:e2e": "cypress run",
//     "quality": "npm run lint && npm run test:coverage && npm run build"
//   }
// }
// Requerimientos:
// # Instalar herramientas básicas de DevOps
// npm install --save-dev husky lint-staged

// # Inicializar Husky
// npx husky init

// # Configurar pre-commit hooks
// echo '#!/bin/sh
// . "$(dirname)"_husky.sh"

// npm run quality' > .husky/pre-commit

// chmod +x .husky/pre-commit