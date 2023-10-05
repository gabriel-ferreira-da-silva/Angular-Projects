import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ItensPageComponent } from './components/itens-page/itens-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    ItensPageComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
