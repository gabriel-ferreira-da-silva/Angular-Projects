import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Item } from 'src/app/interfaces/Item';
import { ItensServiceService } from 'src/app/services/itens-service.service';
import { ItensPageComponent } from '../itens-page/itens-page.component';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  itemName: string="";
  itemDescription: string = "";
  itemPrice: number = 0;
  itemQtd: number = 0;
  itemCategories: string="";
  itemImg: string= "";
  itemVendor: string="";
  itemLongDescription: string = "";

  item?: Item;
  editing: boolean = false;
  constructor(private ItensService: ItensServiceService, private route: ActivatedRoute, private router: Router){
    this.getItem();
  }

  editItem(){
    this.editing = !this.editing;
  }

  getItem(){
    const id  = Number(this.route.snapshot.paramMap.get("id"));
    this.ItensService.getItem(id).subscribe((item)=> this.item = item);
  }
  removeItem(item: Item){
    this.ItensService.remove(item).subscribe();
    this.router.navigate(['/itens-page']);
  }
  submitEdit(item: Item){
    this.ItensService.putItem(item).subscribe();
    this.editing = false;
  }
}
