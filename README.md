# rocketseat-reactnative
Testando conhecimentos de JS com os cursos da Rocketseat

Após seguir este passo a passo `https://reactnative.dev/docs/getting-started.html` para instalar os requisitos para trabalhar com `React Native`, precisamos `reiniciar o pc` para depois seguir o tutorial.

O próximo passo é instalar o `React Native` de forma global usando `npm install -g react-native-cli` no seu projeto.

Agora você pode executar o comando `react-native -v` e ver se retorna a versão instalada no seu projeto.

Se ocorrer algum erro, revise os passos anteriores.

Usaremos o comando `react-native init rocketseatreactnative` para criar o projeto com o nome de `rocketseatreactnative`.

Agora, vamos entrar na pasta do projeto criado para conseguir executar `npx react-native run-android` e abrir o nosso debug mobile.

Abra o seu emulador Android ou iOS ou use a depuração direto no celular.

Agora, vamos começar a fazer a navegação do nosso app com `yarn add react-navigation@2.18.3`.

Depois de configurar e estilizar, vamos instalar o `yarn add axios` para fazer as requisições para a API `https://rocketseat-node.herokuapp.com/api`.

Para simular um State em StateLess, podemos ver a `linha 8` do `product.js`.

O parametro está sendo passado pelo `TouchableOpacity` em `main.js` e a troca de menus é executada pelo `routes.js`.

Agora, temos que adicionar o pacote do `WebView` que foi removido de dentro do react-native usando o comando `yarn add react-native-webview` e o link dele depois `react-native link react-native-webview`.

Para rodar certinho, tive que abriro Android Studio e fazer o build por lá, gerando assim os gradle necessários.

Depois executei novamente o `react-native run-android`.

Comando auxiliar que talvez ajude você `react-native start --reset-cache`.

Aí sim, podemos usá-lo para abrir as urls dos links do github que temos em products no formato similar ao navegador, porém sem sair do nosso app.