# journal



# #1

the first thing to do is obviously start  a new  angular stance with



```shell
ng new [name-of-the-project]
```



app é a pasta base do projeto e appcomponent é o componente pai de todos os componentes pai.

para gerar um componente novo:

```shell
ng generate comoponent path/[component-name]
```

to switch from a component page to another we set a path in app-routing.module.ts. In my case i set:

```typescript
const routes: Routes = [
  {path:'', component: PresentationComponent},
  {path:'itens-page', component: ItensPageComponent},
];
```

in the html files we do

```html
<nav>
    <a routerLink="/itens-page">go to itens page</a>
</nav>
<router-outlet></router-outlet>
```

router-outlet is the  component set by router link 



# #2

para criar o banco de dados com json eu rodei

```shell
npm i json-server
```

criei um arquivo chamado itens.json e adicionei a linha

```json
"itensServer": "json-server --watch itens.json --port 3100"
```

no arquivo package.json

```shell
npm run itensServer
```



# #3

eu sempre esqueço como css funciona

![](https://i.stack.imgur.com/4IT0d.png)


















