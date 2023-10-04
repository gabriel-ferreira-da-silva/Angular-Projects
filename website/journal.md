# journal



# #1

the first thing to do is obviously start  a new  angular stance with



```ng new [name-of-the-project]```



app é a pasta base do projeto e appcomponent é o componente pai de todos os componentes pai.

para gerar um componente novo:



```ng generate comoponent path/[component-name]```



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


































