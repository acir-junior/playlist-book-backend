# 📚 Projeto API com Clean Architecture

Este projeto é uma API desenvolvida utilizando **NestJS** seguindo os princípios da **Clean Architecture**, garantindo modularidade, reutilização e desacoplamento das regras de negócio do framework.
É um projeto simples para criação de uma playlist de livros, você irá criar playlists e incluir livros a estas playlists, nesta api tem um diferencial, você pode pesquisar livros diretamente da api do Google Books. Esta api será integrada a um frontend para facilitar a pesquisa de livros e criação das playlists.

## 🏗 Estrutura do Projeto

```
├── dist                    # Código compilado gerado pelo TypeScript
│   ├── controller          # Controladores compilados
│   ├── core                # Regras de negócio compiladas
│   ├── modules             # Módulos compilados
│   ├── main.js             # Arquivo de entrada da aplicação
│   ├── http-exception.filter.js  # Middleware de tratamento de exceções
│   └── tsconfig.build.tsbuildinfo
├── docker-compose.yml      # Configuração do Docker Compose
├── nest-cli.json           # Configuração do NestJS
├── node_modules            # Dependências do projeto
├── package.json            # Manifesto do projeto
├── package-lock.json       # Lockfile do NPM
├── prisma                  # Configuração do Prisma ORM
│   ├── migrations          # Migrações do banco de dados
│   └── schema.prisma       # Esquema do Prisma ORM
├── README.md               # Documentação do projeto
├── src                     # Código fonte do projeto
│   ├── app.module.ts       # Módulo principal da aplicação
│   ├── controller          # Controladores do NestJS
│   ├── book                # Módulo relacionado a livros
│   ├── playlist            # Módulo relacionado a playlists
│   ├── core                # Camada de regras de negócio
│   │   ├── application     # Casos de uso
│   │   ├── domain          # Entidades e regras de negócio
│   │   └── infra           # Infraestrutura
│   ├── http-exception.filter.ts  # Middleware de exceções
│   ├── main.ts             # Arquivo de bootstrap da aplicação
│   └── modules             # Módulos da aplicação
│       ├── google-books-api # Integração com API externa
│       ├── prisma          # Configuração do banco de dados
│       └── repositories.module.ts # Repositórios
├── test                    # Testes automatizados
│   ├── app.e2e-spec.ts     # Testes de integração
│   └── jest-e2e.json       # Configuração do Jest
├── tsconfig.build.json     # Configuração do TypeScript para build
└── tsconfig.json           # Configuração geral do TypeScript
```

## 🚀 Tecnologias Utilizadas

- **NestJS**: Framework para construção de APIs Node.js escaláveis
- **Prisma ORM**: ORM para manipulação do banco de dados
- **PostgreSQL**: Banco de dados relacional
- **Swagger**: Documentação da API
- **Rate Limit**: Controle de requisições para evitar abuso
- **Docker**: Containerização para ambiente de desenvolvimento e produção
- **Jest**: Framework de testes automatizados

## 📖 Arquitetura

A arquitetura do projeto segue os princípios da **Clean Architecture**, organizando o código em camadas bem definidas:

- **Core**: Camada independente do framework, contendo as regras de negócio (Application, Domain e Infra)
- **Modules**: Módulos do NestJS que utilizam a camada de Core para implementar funcionalidades específicas
- **Controllers**: Expondo os endpoints e utilizando os módulos para processar as requisições
- **Infrastructure (Infra)**: Implementações concretas, como repositórios e integrações externas

## 🛠 Configuração e Execução

1. **Instale as dependências**

   ```sh
   npm install
   ```

2. **Configure o banco de dados (Prisma)**

   ```sh
   npx prisma migrate dev
   ```

3. **Execute o projeto**

   ```sh
   npm run start:dev
   ```

4. **Acesse a documentação da API (Swagger)**

   - A API fornece documentação interativa através do Swagger.
   - Após iniciar o projeto, acesse: `http://localhost:3000/api`

## 🛡 Tratamento de Erros

O projeto implementa um **HttpExceptionFilter**, que intercepta exceções e padroniza as respostas de erro.

## 🔐 Rate Limit

Para evitar abusos, o projeto conta com um **Rate Limiter**, controlando o número de requisições permitidas por IP.

## 📑 Testes Automatizados

Alguns testes estão dentro da pasta core e dentro de suas subpastas, que são testes de dominio (unitários) e integração:

Para facilitar a execução dos testes, instale estas extensões:

- https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
- https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner

## 🐳 Docker

O projeto pode ser executado utilizando **Docker**:

```sh
docker-compose up --build
docker exec -it backend npx prisma migrate dev
```

## 📬 Contribuição
- Sugestões e conselhos para melhorar o código e também meus conhecimentos, me mande um e-mail;
- amjr13@icloud.com

---

📌 **Autor:** [Acir M. Junior] 📅 **Última atualização:** [11/03/2025]

