import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/Item';
import { ItensServiceService } from 'src/app/services/itens-service.service';
import { ItensPageComponent } from '../itens-page/itens-page.component';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  item?: Item;
  constructor(private ItensService: ItensServiceService, private route: ActivatedRoute){
    this.getItem();
  }

  getItem(){
    const id  = Number(this.route.snapshot.paramMap.get("id"));
    this.ItensService.getItem(id).subscribe((item)=> this.item = item);
  }
}
