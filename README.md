# Vitrine Movelaria Cris - Backend

Este projeto é o backend da aplicação Vitrine Movelaria Cris, desenvolvido em Node.js com TypeScript, Express e Prisma ORM, utilizando MySQL como banco de dados. Ele fornece uma API REST para gerenciamento dos móveis, categorias, materiais, cores e imagens da loja.

## Tecnologias Utilizadas
- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **MySQL**

## Tecnologias
- Node.js
- TypeScript
- Express
- Prisma ORM
- MySQL
- dotenv
- CORS

## Estrutura do Projeto
```
├── prisma/
│   └── schema.prisma         # Schema do banco de dados
├── src/
│   ├── app.ts                # Inicialização do servidor Express
│   ├── prisma.ts             # Instância do Prisma Client
│   ├── controllers/
│   │   └── productsController.ts # Controller de móveis
│   └── routes/
│       └── productsRoutes.ts     # Rotas de móveis
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

## Configuração Inicial
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
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   PORT=3001
   DATABASE_URL="mysql://root:123456@localhost:3308/movelaria"
   ALLOWED_ORIGIN=http://localhost:3001
   ```
4. **Banco de dados:**
   - O schema está em `prisma/schema.prisma`.
   - Para sincronizar com o banco existente:
     ```bash
     npx prisma db pull
     npx prisma generate
     ```
   - Para criar as tabelas do zero (apaga dados!):
     ```bash
     npx prisma migrate dev --name init
     ```

## Executando o Projeto
- **Desenvolvimento:**
  ```bash
  npm run dev
  ```
- **Produção:**
  ```bash
  npm run build
  npm start
  ```

## Endpoints da API
Prefixo das rotas: `/furniture`

| Método | Rota                   | Descrição                        |
|--------|------------------------|----------------------------------|
| GET    | /furniture/all         | Retorna todos os móveis          |
| GET    | /furniture/ativos      | Retorna móveis ativos            |
| POST   | /furniture/createmovel | Cadastra novo móvel (implementar)|

### Exemplo de resposta
```json
[
  {
    "id": 1,
    "nome": "Mesa de Jantar",
    "preco": 1200.00,
    "descricao": "Mesa de madeira maciça",
    "categoria": "Sala de Jantar",
    "material": "Madeira",
    "imagem_url": "https://..."
  }
]
```

## Modelos do Banco
Principais tabelas:
- `admin_user` (administração)
- `categoria` (categorias de móveis)
- `cor` (cores)
- `imagem` (imagens)
- `material` (materiais)
- `movel` (móveis)

Exemplo de modelo Prisma:
```prisma
model movel {
  id        Int     @id @default(autoincrement())
  nome      String  @db.VarChar(100)
  descricao String? @db.Text
  categoria String? @db.VarChar(50)
  material  String? @db.VarChar(45)
  preco     Decimal? @db.Decimal(10, 2)
  imagem_url String? @db.LongText

  @@map("movel")
}
```

O schema completo está em `prisma/schema.prisma`.

## Boas Práticas
- Separe lógica de negócio (controllers) das rotas
- Use variáveis de ambiente para dados sensíveis
- Rode `npx prisma generate` após alterar o schema
- Documente endpoints e modelos
- Use TypeScript com tipagem estrita
- Versione o projeto com Git

## Contribuição
Pull requests são bem-vindos!
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nome-feature`)
3. Commit suas alterações
4. Abra um PR

## Dúvidas ou Suporte
Abra uma issue no repositório ou entre em contato com o autor.

---
Projeto desenvolvido por Kresley Lucas.
Projeto desenvolvido por Codexus (Grupo PI Fatec Guaratinguetá).
