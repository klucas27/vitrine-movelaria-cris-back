# Vitrine Movelaria Cris - Backend

Este projeto é o backend da aplicação Vitrine Movelaria Cris, desenvolvido em Node.js com TypeScript, Express e Prisma ORM, utilizando MySQL como banco de dados. Ele fornece uma API REST para gerenciamento dos móveis, categorias, materiais, cores e imagens da loja.

## Tecnologias Utilizadas
- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **MySQL**
- **dotenv** (variáveis de ambiente)
- **CORS**

## Estrutura de Pastas
```
src/
  app.ts                # Arquivo principal, inicializa o servidor Express
  prisma.ts             # Instância do Prisma Client
  controllers/
    productsController.ts # Lógica das rotas de móveis
  routes/
    productsRoutes.ts     # Rotas relacionadas a móveis
```

## Configuração
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/klucas27/vitrine-movelaria-cris-back.git
   cd vitrine-movelaria-cris-back
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure o arquivo `.env`:**
   Crie um arquivo `.env` na raiz do projeto com as variáveis:
   ```env
   PORT=3000
   DATABASE_URL="mysql://usuario:senha@host:porta/nome_do_banco"
   DB_HOST=...
   DB_USER=...
   DB_PASS=...
   DB_NAME=...
   ALLOWED_ORIGIN=http://localhost:3001
   ```
4. **Configure o banco de dados:**
   - O projeto utiliza o Prisma ORM. O schema do banco está em `prisma/schema.prisma`.
   - Para sincronizar o Prisma com o banco existente:
     ```bash
     npx prisma db pull
     npx prisma generate
     ```
   - Para criar as tabelas do zero (atenção: apaga dados!):
     ```bash
     npx prisma migrate dev --name init
     ```

## Executando o Projeto
- **Modo desenvolvimento:**
  ```bash
  npm run dev
  ```
- **Modo produção:**
  ```bash
  npm run build
  npm start
  ```

## Endpoints Principais
O prefixo das rotas é `/furniture`.

- `GET /furniture/all` - Retorna todos os móveis cadastrados
- `GET /furniture/ativos` - Retorna apenas os móveis ativos
- `POST /furniture/createmovel` - Cadastra um novo móvel (implementar no controller)

### Exemplo de resposta
```json
[
  {
    "id": 1,
    "nome": "Mesa de Jantar",
    "preco": 1200.00,
    "descricao": "Mesa de madeira maciça",
    "ativo": 1,
    "categoria": "Sala de Jantar",
    "material": "Madeira",
    "cor": "Branco (Fosco)",
    "imagem_url": "https://..."
  }
]
```

## Modelos do Banco
O banco possui as tabelas:
- `admin_user` (administração)
- `categoria` (categorias de móveis)
- `cor` (cores)
- `imagem` (imagens)
- `material` (materiais)
- `movel` (móveis, com relacionamentos para as demais)

O schema completo está em `prisma/schema.prisma`.

## Boas Práticas
- Separe lógica de negócio (controllers) das rotas.
- Use variáveis de ambiente para dados sensíveis.
- Sempre rode `npx prisma generate` após alterar o schema.
- Documente novos endpoints e modelos.

## Contribuição
Pull requests são bem-vindos! Para contribuir:
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nome-feature`)
3. Commit suas alterações
4. Abra um PR

## Dúvidas ou Suporte
Abra uma issue no repositório ou entre em contato com o autor.

---
Projeto desenvolvido por Codexux.
