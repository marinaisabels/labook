## ![alt text](https://miro.medium.com/fit/c/128/128/2*pq7dg0Y11VmKBSy6qiJdtQ.png "Logo Title Text 1")Labenu Web Full-Stack Bootcamp
> Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com node.js.
______

## Projeto Backend desenvolvido por Marina Isabel, Rosana Rezende e Thales Milanezi
- [Meu Linkedin](https://www.linkedin.com/in/marinaisabel/)
- [Linkedin Rosana](https://www.linkedin.com/in/rosanarezende/)
- [Linkedin Thales](https://www.linkedin.com/in/thales-fernando-milanezi-952028114/)

______

### Projeto Labook 
O LaBook será uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal), comentá-los e curti-los também. O desenvolvedor do frontend acha que é bastante experiente; dessa forma, já preparou uma lista de todos os endpoints que serão necessários para o projeto:
- 1. Cadastrar
- 2. Logar
- 3. Fazer amizade
- 4. Desfazer Amizade
- 5. Criar post
- 6. Ver todo o Feed
- 7. Ver apenas um tipo de post do Feed

Desafios: 
- 8. Curtir Post
    Essa requisição deve receber somente o id do post e retornar uma mensagem de sucesso ou erro. Lembre-se de que um usuário não pode curtir o mesmo post duas vezes.
- 9. Descurtir Post
    Essa requisição deve receber somente o id do post e retornar uma mensagem de sucesso ou erro. Lembre-se de que um usuário não pode descurtir um post que não tenha curtido
- 10. Comentar Post
    Recebendo o id do post e mensagem do comentário, o endpoint deve funcionar sem problemas. Um usuário pode, se quiser, comentar mais de uma vez o mesmo post. 
- 11. Implemente a funcionalidade que permita que o token de autenticação seja atualizado
    Também conhecido como "Refresh Token", você deve implementar um endpoint que permita que o Frontend autalize o "acess token", caso este expire

### Começando
  Para executar o projeto, será necessário instalar os seguintes programas:
  - [Node.js e Express](https://medium.com/@pedrompinto/tutorial-node-js-como-usar-o-express-js-7d3027f4f57b)
  - [Knex](http://knexjs.org/)
  
### Desenvolvimento
  Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:
  
  ``cd "Pasta do arquivo"
    git clone https://github.com/marinaisabels/backend-project.git
    ``
### Configuração
  Para configurar o arquivo, é preciso instalar as depêndencias
  - Node e Typesript
    `npm init`
    `npm install typscript @types/node ts-node-dev`
  - Banco de dados 
    `npm install knex mysql @types/knex dotenv`
  - Express 
    `npm install express@4.17.0 @types/express@4.17.0`
  - UUID 
    `npm install uuid @types/uuid`
  - JWT 
    `npm install jsonwebtoken @types/jsonwebtoken`
### Instruções para rodar
As instruções são:
- `npm install` para instalar todas as dependências;
- `npm run start` para rodar localmente o projeto
- `npm run build` para gerar uma versão possível de ser deployada com 
os arquivos transpilados para Javascript    
    
Esse é um projeto de Backend feito utilizando NodeJS, Express, Typescript 
e MySQL. Além disso, ele segue uma arquitetura baseada em MVC, com 3 camadas 
simples:

- Controller: responsável pela comunicação com agentes externos 
(como o Frontend)
- Model: responsável pela representação das nossas entidades
- Business: responsável pela lógica de negócio
