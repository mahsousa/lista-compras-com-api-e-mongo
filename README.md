# Lista de Compras com API REST
![image](https://github.com/mahsousa/lista-compras/assets/32987989/decdb561-aa46-4193-97a1-a0ff1ec8cbd6)

Este projeto é uma evolução do antigo projeto "lista-compras-com-gerador-de-pdf", adaptado para uma arquitetura mais robusta e escalável. Agora, ele utiliza uma API REST desenvolvida com .NET Core 8 e armazena dados em um banco de dados MongoDB. O ambiente de desenvolvimento e produção é gerenciado através do Docker e Docker Compose.

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Backend**: .NET Core 8
- **Banco de Dados**: MongoDB
- **Containerização**: Docker e Docker Compose

## Funcionalidades

- **Gerenciamento de Lista de Compras**: Adicione e exclua itens da sua lista de compras.
- **Gerador de PDF**: Gere um PDF da lista de compras.
- **Persistência de Dados**: Armazenamento dos dados de compras em MongoDB.
- **Containerização**: Uso de Docker para simplificar o processo de configuração e execução do ambiente.

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (para o frontend React.js)
- [.NET Core 8 SDK](https://dotnet.microsoft.com/download) (para o backend)
- [Docker](https://www.docker.com/products/docker-desktop) e [Docker Compose](https://docs.docker.com/compose/install/) (para gerenciar containers)

## Configuração do Ambiente

1. **Clone o Repositório**
git clone https://github.com/seuusuario/lista-de-compras.git
cd lista-de-compras

2. **Inicie os Containers**
Execute o comando abaixo para iniciar os containers Docker, isso irá construir e iniciar os containers para o frontend, backend e MongoDB.
docker-compose up --build

3. **Instale as Dependências do Frontend**
Navegue até o diretório frontend e instale as dependências:
cd frontend
npm install

4. **Execute o Frontend**
Para iniciar o frontend em modo de desenvolvimento:
npm start

5. **Uso**
Frontend: Acesse o frontend em http://localhost:3000 para interagir com a lista de compras.
Backend: A API REST estará disponível em http://localhost:5000



