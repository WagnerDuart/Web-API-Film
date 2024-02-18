# API de Filmes

## Autor
Wagner Santos Duarte

## Descrição e Objetivo do Projeto
O projeto consiste na criação de uma API RESTful para gerenciar informações detalhadas sobre filmes. O objetivo principal é permitir aos usuários realizar operações CRUD (Create, Read, Update, Delete) para manipular os dados dos filmes, incluindo título, descrição, URL da imagem e gênero. A API foi desenvolvida com base nos conhecimentos adquiridos em aulas sobre o desenvolvimento de APIs, utilizando tecnologias como Node.js, Express.js e MongoDB para armazenamento dos dados.

## Tecnologias Utilizadas

- node.js
- express
- mongoose
- cors
- dotenv
- multer
- nodemon
- bcrypt
- jsonwebtoken
- mongoDB
- render

## Documentação

### Introdução
A API permite aos usuários realizar diversas operações relacionadas aos filmes cadastrados no sistema. Essas operações incluem adicionar um novo filme, listar todos os filmes cadastrados, listar um filme específico por ID, atualizar os dados de um filme e excluir um filme do sistema. Além disso, a API conta com autenticação de usuários, garantindo que apenas usuários autenticados tenham acesso às operações privadas da API, como adicionar, atualizar e excluir filmes.

### Autenticação de Usuários

Antes de utilizar as operações privadas da API, os usuários devem se autenticar utilizando o endpoint `/auth/login`. Após a autenticação bem-sucedida, o usuário receberá um token de acesso que deverá ser incluído no cabeçalho das requisições para as operações privadas.

## URL API: https://web-api-film.onrender.com

## **Obs:** Observação: A conexão com o banco de dados pode apresentar lentidão devido ao uso de um banco de dados gratuito. Se a conexão não for estabelecida imediatamente, tente novamente algumas vezes. Após a conexão ser estabelecida, o desempenho da API deve ser rápido.

### Instalação Local
Antes de iniciar o servidor, é necessário definir as variáveis de ambiente no arquivo .env. Certifique-se de criar um arquivo .env na raiz do projeto e definir as variáveis necessárias, como o segredo para geração de tokens JWT e as configurações do banco de dados MongoDB.

Para instalação do projeto é necessário dar os seguintes comandos: 

```sh
npm install
```
Para instalar o gerenciador de arquivos NPM.

```sh
npm start
```
Para iniciar o servidor.

Deve aparecer a seguinte mensagem no conselo: 
**Example app listening on port:(Obs: vai aparece a portaque vc definil no .env ou porta 3000)**
**Conectado ao banco!**

Para testar a API, é necessário um framework para desenvolvimento/teste de API Clients. Neste projeto, foi utilizado o Insomnia. O Insomnia permite enviar requisições HTTP para a API, testando as diferentes rotas e métodos disponíveis, além de facilitar a visualização e o gerenciamento dos resultados.

### Banco de Dados 

Para gerenciar as informações da API em um banco de dados, foi adotada a tecnologia MongoDB, utilizando sua versão na nuvem conhecida como MongoDB Atlas Database. Essa escolha permitiu armazenar e manipular os dados de forma eficiente, aproveitando os recursos oferecidos pela plataforma Atlas para garantir a disponibilidade e a segurança dos dados da API de filmes.

## Registro de Usuário

### Para ter o acesso a API e necessário cria um usúario

### [POST] auth/register
- **Descrição:** Esse endpoints permite o registro de novos usuários na API. Os usuários devem fornecer um nome, um email, uma senha e a confirmação da senha para criar uma conta.

# Exemplo:

Body:
```json
{
	"name": "pedro",
	"email": "pedro@teste.com",
	"password": "teste",
	"confirmpassword": "teste"
}
```
Resposta:
```json
{
	"msg": "Usúario criado com sucesso!"
}
```
## Login de Usuário

### Depois de ter criado o usúario e necessario fazer o longin

### [POST] /auth/login

-**Descrição:** Esse endpoint faz a autenticação de usuários. Os usuários devem fornecer seu email e senha para receber um token de acesso.

# Exemplo:
Body:
```json
{
	"email": "pedro@teste.com",
	"password": "teste"
}
```
Resposta:
```json
{
	"msg": "Autenticação realizada com sucesso",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDEzNDdiMjhjODA1NDllNjE2ZTU4YiIsImlhdCI6MTcwODIwOTQ4MH0.GxXlVyqCxgz_pANlxxkQWIrSKods1_zYx_dPbBtVsgM"
}
```
## Depois de efetua o login você ira receber um token, esse token que liberar o acesso a API

Token da resposta acima:
```json
{
	
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDEzNDdiMjhjODA1NDllNjE2ZTU4YiIsImlhdCI6MTcwODIwOTQ4MH0.GxXlVyqCxgz_pANlxxkQWIrSKods1_zYx_dPbBtVsgM"
}
```
## Usando a API com Insomnia

### Para utilizar a API com o Insomnia, os usuários devem seguir os passos de configuração descritos na seção "Usando Insomnia". Isso inclui a criação de uma variável de ambiente para armazenar o token de acesso e a inclusão desse token no cabeçalho das requisições para as operações privadas da API.

## Usando Insomnia

### Passo 1

![Image](./images/Captura%20de%20Tela%20(10).png)

1. Clique na engrenagem indicada pela seta.

### Passo 2

![Image](./images/Captura%20de%20Tela%20(11).png)

1. Crie uma variável com seu token, conforme mostrado na imagem.

2. **Obs:** Não esqueça de adicionar "Bearer" junto com seu token, como mostrado na imagem, pois ele será responsável por identificar o tipo do token de acesso.

### Passo 3

![Imagem](./images/Captura%20de%20Tela%20(12).png)

1. Clique em "Headers", conforme indicado na imagem.

![Image](./images/Captura%20de%20Tela%20(13).png)

2. Clique em "Add", conforme indicado na imagem.

![Image](./images/Captura%20de%20Tela%20(15).png)

### Passo 4

![Image](./images/Captura%20de%20Tela%20(15).png)

1. No campo "header", você irá definir o header como "```authorization```". 

![Image](./images/Captura%20de%20Tela%20(16).png)

2. No campo "value", pressione "Ctrl + Espaço" no seu teclado e adicione a variável que criamos no Passo 2.

![Image](./images/Captura%20de%20Tela%20(14).png)

 Seguindo os passos, você terá a configuração do token feita com sucesso. 

 Com isso, você poderá testar a API. 

### **Obs:** Essa configuração deve ser feita nos "Headers" de cada nova "New Request" que você criar com o Insomnia.

## Endpoints de consumo da API

### [POST] /user/add/film

-**Descrição:** Adiciona um novo filme ao sistema. **Obs:** Os usuários devem estar autenticados para acessar este endpoint.

Body:
```json
{
    "title": "Your Name(Seu nome)",
    "description": "Mitsuha Miyamizu é uma estudante do ensino médio na cidade rural de Itomori, no Japão. Entediada da cidade, ela deseja ser um garoto de Tóquio em sua próxima vida. Logo, ela começa a trocar de corpo intermitentemente com Taki Tachibana, um garoto de Tóquio. Em certos dias, Taki e Mitsuha acordam no corpo um do outro e devem viver o dia inteiro como o outro, revertendo quando vão dormir à noite. Os dois estabeleceram regras básicas para compartilhar seus corpos, comunicando-se por meio de mensagens em papel, telefones e pele. Mitsuha (no corpo de Taki) marca um encontro para Taki com sua colega de trabalho, Miki Okudera, enquanto Taki (no corpo de Mitsuha) ajuda Mitsuha a se tornar mais popular na escola",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png",
    "genre": "Drama Romântico, Fantasia Científica"
}
```

Resposta:
```json
{
	"msg": "Filme adicionado com sucesso.",
	"film": {
		"title": "Your Name(Seu nome)",
		"description": "Mitsuha Miyamizu é uma estudante do ensino médio na cidade rural de Itomori, no Japão. Entediada da cidade, ela deseja ser um garoto de Tóquio em sua próxima vida. Logo, ela começa a trocar de corpo intermitentemente com Taki Tachibana, um garoto de Tóquio. Em certos dias, Taki e Mitsuha acordam no corpo um do outro e devem viver o dia inteiro como o outro, revertendo quando vão dormir à noite. Os dois estabeleceram regras básicas para compartilhar seus corpos, comunicando-se por meio de mensagens em papel, telefones e pele. Mitsuha (no corpo de Taki) marca um encontro para Taki com sua colega de trabalho, Miki Okudera, enquanto Taki (no corpo de Mitsuha) ajuda Mitsuha a se tornar mais popular na escola",
		"image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png",
		"genre": "Drama Romântico, Fantasia Científica",
		"_id": "65d16d9785084a03d64b6462",
		"__v": 0
	}
}
```

### [GET] /user/list/films

-**Descrição:** Retorna todos os filmes cadastrados no sistema. **Obs:** Os usuários devem estar autenticados para acessar este endpoint.

Resposta:
```json
[
	{
		"_id": "65c960171b30255fc19d18e3",
		"title": "Diário de uma Paixão",
		"description": "Em um asilo, vivem um homem (James Garner) e uma mulher (Gena Rowlands). Ele vive lá por opção, ela, por consequência de uma demência senil que prejudicou sua memória. Todos os dias, o homem lê para a senhora um capítulo de uma linda história de amor, que foi escrita num velho diário. A história consiste no romance de Noah Calhoun (Ryan Gosling) e Allie Hamilton (Rachel McAdams), que se conheceram e apaixonaram-se num parque de diversões em Seabrook Island, na Carolina do Sul, nos anos 40. Foi o verão mais intenso de suas vidas. Porém, por imposição da família de Allie, o casal, loucamente apaixonado, teve de separar-se quando as férias acabaram. Eles não aceitavam que ela, uma jovem rica de 17 anos se envolvesse com um pobre operário.",
		"image_url": "https://upload.wikimedia.org/wikipedia/pt/3/32/The_Notebook_p%C3%B4ster.jpg",
		"genre": "Drama Romântico",
		"__v": 0
	},
	{
		"_id": "65c960751b30255fc19d18e5",
		"title": "Cidade dos Anjos",
		"description": "O filme conta a história do anjo Seth, encarregado de tomar conta de Los Angeles e que se apaixona pela mortal Maggie, uma cirurgiã que fica transtornada enquanto um paciente perde a vida na sua mesa de cirurgia. Seth acompanha o sofrimento de Maggie e desenvolve sentimentos por ela que transformam sua condição imortal, de repente ele pensa em desistir da eternidade para ficar com ela.",
		"image_url": "https://upload.wikimedia.org/wikipedia/pt/6/6d/City_Angels_poster.jpg",
		"genre": "Romance",
		"__v": 0
	},
	{
		"_id": "65c961861b30255fc19d18e7",
		"title": "Avatar",
		"description": "A história se concentra em um conflito épico em Pandora, uma lua habitada do tamanho da Terra de Polyphemus, um dos três gigantes gasosos orbitando Alpha Centauri. Em Pandora, colonos humanos e os habitantes indígenas humanoides sencientes de Pandora, os Na'vi, travam uma guerra sobre os recursos do planeta e a existência contínua deste último. O título do filme refere-se aos corpos humanos-na'vi controlados remotamente, geneticamente modificados, usados pelos personagens humanos do filme para interagir com os nativos.",
		"image_url": "https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg",
		"genre": "Ação, Aventura, Ficção Científica",
		"__v": 0
	},
	{
		"_id": "65c9624a1b30255fc19d18e9",
		"title": "American Pie - A Primeira Vez É Inesquecível",
		"description": "A história gira em torno de cinco colegas do último ano do ensino médio da fictícia East Great Falls, localizada em Michigan: Jim Levenstein, um nerd desajeitado e sexualmente ingênuo cujo pai lhe oferece pornografia e conselhos sexuais desajeitados; Chris Ostreicher, uma estrela superconfiante do time de lacrosse do colégio; Kevin Myers, o calmo líder do grupo que busca perder a virgindade com sua namorada Vicky; Paul Finch, que aprecia mochaccinos; e Steven Stifler, um garoto popular, barulhento, apaixonado por esportes, que costuma dar festas descontroladas e é o único dos cinco amigos que não é virgem. Quando o colega nerd Sherman afirma que perdeu a virgindade em uma festa organizada por Stifler, Kevin pede a Oz, Finch e Jim que se juntem a ele para fazer um pacto: eles terão que perder as suas virgindades até a formatura do ensino médio.",
		"image_url": "https://upload.wikimedia.org/wikipedia/pt/2/23/American_pie_poster_promocional.jpg",
		"genre": "Comédia",
		"__v": 0
	},
	{
		"_id": "65c962ed1b30255fc19d18eb",
		"title": "Resident Evil 3: A Extinção",
		"description": "Uma Alice clonada acorda em uma mansão, vaga por seus corredores, e é forçada a escapar de várias armadilhas de segurança , espelhando alguns acontecimentos do primeiro filme . Durante sua fuga, Alice faz uso de novos poderes telecinéticos, matando um segurança. No entanto, ela acaba sendo morta por uma mina escondida no chão. Seu corpo é jogado em um poço cheio de dezenas de outros clones de Alice, representando os resultados fracassados do Projeto Alice em andamento da Umbrella Corporation .",
		"image_url": "https://upload.wikimedia.org/wikipedia/pt/3/34/Resident_Evil_Extinction.jpg",
		"genre": "ação, ficção científica, terror",
		"__v": 0
	},
	{
		"_id": "65d16d9785084a03d64b6462",
		"title": "Your Name(Seu nome)",
		"description": "Mitsuha Miyamizu é uma estudante do ensino médio na cidade rural de Itomori, no Japão. Entediada da cidade, ela deseja ser um garoto de Tóquio em sua próxima vida. Logo, ela começa a trocar de corpo intermitentemente com Taki Tachibana, um garoto de Tóquio. Em certos dias, Taki e Mitsuha acordam no corpo um do outro e devem viver o dia inteiro como o outro, revertendo quando vão dormir à noite. Os dois estabeleceram regras básicas para compartilhar seus corpos, comunicando-se por meio de mensagens em papel, telefones e pele. Mitsuha (no corpo de Taki) marca um encontro para Taki com sua colega de trabalho, Miki Okudera, enquanto Taki (no corpo de Mitsuha) ajuda Mitsuha a se tornar mais popular na escola",
		"image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png",
		"genre": "Drama Romântico, Fantasia Científica",
		"__v": 0
	}
]
```

### [GET] /user/list/films/{id}

-**Descrição:** Retorna as informações de um filme específico com base no ID fornecido. **Obs:** Os usuários devem estar autenticados para acessar este endpoint.

Resposta:
```json
{
	"_id": "65d16d9785084a03d64b6462",
	"title": "Your Name(Seu nome)",
	"description": "Mitsuha Miyamizu é uma estudante do ensino médio na cidade rural de Itomori, no Japão. Entediada da cidade, ela deseja ser um garoto de Tóquio em sua próxima vida. Logo, ela começa a trocar de corpo intermitentemente com Taki Tachibana, um garoto de Tóquio. Em certos dias, Taki e Mitsuha acordam no corpo um do outro e devem viver o dia inteiro como o outro, revertendo quando vão dormir à noite. Os dois estabeleceram regras básicas para compartilhar seus corpos, comunicando-se por meio de mensagens em papel, telefones e pele. Mitsuha (no corpo de Taki) marca um encontro para Taki com sua colega de trabalho, Miki Okudera, enquanto Taki (no corpo de Mitsuha) ajuda Mitsuha a se tornar mais popular na escola",
	"image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png",
	"genre": "Drama Romântico, Fantasia Científica",
	"__v": 0
}

```

### [PUT] /user/update/film/:id

-**Descrição:** Atualiza as informações de um filme existente com base no ID fornecido. **Obs:** Os usuários devem estar autenticados para acessar este endpoint

Body:
```json
{
	"description": "Assista e se surpreenda"
}
```

Resposta:
```json
{
	"msg": "Filme atualizado com sucesso.",
	"film": {
		"_id": "65d16d9785084a03d64b6462",
		"title": "Your Name(Seu nome)",
		"description": "Assista e se surpreenda",
		"image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png",
		"genre": "Drama Romântico, Fantasia Científica",
		"__v": 0
	}
}
```

### [DELETE] /user/delete/film/:id

-**Descrição:** Exclui um único filme com o ID especificado. **Obs:** Os usuários devem estar autenticados para acessar este endpoint

Resposta:
```json
{
	"msg": "Filme deletado com sucesso.",
	"film": {
		"_id": "65d16d9785084a03d64b6462",
		"title": "Your Name(Seu nome)",
		"description": "Assista e se surpreenda",
		"image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png",
		"genre": "Drama Romântico, Fantasia Científica",
		"__v": 0
	}
}
```

## Créditos

### https://mongoosejs.com/docs/guide.html
### https://youtu.be/zaWFnHagbrM?si=l5rN66Lmo2yWmO7L
