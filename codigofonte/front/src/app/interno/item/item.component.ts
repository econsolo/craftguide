import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../comum/util/util.service';
import { ItemService } from './item.service';
import { Item } from 'src/app/comum/model/item';

@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.style.css']
})

export class ItemComponent implements OnInit {

  public item: Item;

  constructor(@Inject(Router) private router: Router,
    @Inject(ItemService) private itemService: ItemService,
    @Inject(UtilService) private utilService: UtilService) {

  }

  public ngOnInit(): void {
    this.item = new Item();
  }

}
