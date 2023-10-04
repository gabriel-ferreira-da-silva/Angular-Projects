import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ItensPageComponent } from './components/itens-page/itens-page.component';

const routes: Routes = [
  {path:'itens-page', component: ItensPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
