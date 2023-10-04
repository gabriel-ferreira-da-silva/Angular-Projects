import { Component } from '@angular/core';
import { ItensServiceService } from 'src/app/services/itens-service.service';
import { Item } from 'src/app/interfaces/Item';
@Component({
  selector: 'app-itens-page',
  templateUrl: './itens-page.component.html',
  styleUrls: ['./itens-page.component.css']
})
export class ItensPageComponent {
  itens?: Item[];

  constructor(private itemService: ItensServiceService){
    this.itemService.getAll().subscribe((itens) => (this.itens = itens));
  }
}
