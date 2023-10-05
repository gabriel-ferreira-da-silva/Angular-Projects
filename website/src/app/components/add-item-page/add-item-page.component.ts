import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/Item';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ItensServiceService } from 'src/app/services/itens-service.service';
@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent {
  itemImg: string= "";
  itemName: string="";
  itemDescription: string = "";
  itemQtd: number = 0;
  itemPrice: number = 0;
  itemLongDescription: string = "";

  constructor(private itensService: ItensServiceService){
  }
  item: Item ={
    id: 0,
    name: "string",
    description: "string| null",
    price: 0,
    qtd: 0,
    categories: [],
    img: "string | null",

    // atributos descritores
    vendor: "string | null",
    longDescription: "string | null",
    review: 0
  };
  
  addItem(){
    this.item.id = this.itemPrice * this.itemPrice;
    this.item.name= this.itemName;
    this.item.img = this.itemImg;

    this.itensService.addItem(this.item).subscribe();
  }

}
