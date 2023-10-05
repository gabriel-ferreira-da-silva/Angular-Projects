import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ItensPageComponent } from './components/itens-page/itens-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { AddItemPageComponent } from './components/add-item-page/add-item-page.component';

const routes: Routes = [
  {path:'', component: PresentationComponent},
  {path:'itens-page', component: ItensPageComponent},
  {path:'itens-page/:id', component: ItemDetailsComponent},
  {path:'add-item-page', component: AddItemPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
