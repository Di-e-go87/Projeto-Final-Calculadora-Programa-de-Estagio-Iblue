# Projeto final  de uma Calculador para o programa de estágio Iblue Tech.


##### Os recursos utilizados nesse projeto foram
- [Codigo do Visual Studio    ](https://code.visualstudio.com/?WT.mc_id)
- [ Node.Js](https://nodejs.org/en/)
- [ Vue.Js](https://vuejs.org/)
- [Vue.CLI](https://cli.vuejs.org/)

###### No Projeto foi pedido que fosse criado uma calculadora funcional com todas as funções (soma, subtração, divisão e multiplicação) e acrescentar-se as funções de  porcetagem e raiz quadrada.
###### Antes de começar a desenvolver o projeto foi feito um esboço de como iria   ficar a calculadora, foi utiliizado a plataforma do[ Figma](https://www.figma.com/downloads/), para elaborar a calculadora.
Foi utilizado o site de uma escola para poder definir quais seriam as as cores  usadas. (https://marista.edu.br/patosdeminas/).



# Testes Unitarios TDD(Test Driven Development)


###### Repositório responsável pelos códigos desenvolvidos da calculadora.
###### Logo após a criação de como seria desenvolvida a calculadora foi feito a instalação de algumas bibliotecas dentro da aplicação para auxiliar na criação das funções para o funcionamento dos testes unitarios:
- [mocha](https://mochajs.org/)
- [chai](https://www.chaijs.com/)
###### Os testes foram feitos com todas as funções que serão desenvolvidas na calculadora (soma,subtração,multiplicação,divisão,porcentagem e raiz quadrada).Após utilizar o comando npm run test no terinal todos os testes foram aprovados, sem nenhuma falha.



# Criando o Projeto no Vue-CLI

###### Antes de cria o projeto no Vue-CLI há necessidade de instalar o pacote globalmente,foi digitado o comando abaixo no prompt de comando:

#### > npm install --global vue-cli

###### Depois de instalado todos os recursos acima e incluso o Vue-CLI,para criar o projeto da calculadora digitei o comando abaixo.

#### > vue init webpack calculadora-app

###### Após digitar o comando acima, vai aparecer várias perguntas de como você deseja configurar o seu projeto. 
###### Depois de fazer tudo isso,utilizei o comando abaixo para executar a aplicação Vue.js:

#### > cd calculadora-app

#### > npm run dev

###### Vai pedir para abrir a página no localhost:8080. Se estiver correta você vai visualizar a pagina com a aplicação do Vue-CLI.
###### Após esse processo deu se inicio ao desenvolvimento do projeto,foram utilizados varias funções na parte de desenvolvimento da calculadora quanto na programação dos operadores para realização as funções matematicas.
