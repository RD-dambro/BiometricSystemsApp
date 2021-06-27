import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Bio, Item } from '../item.model';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {
  @Input() template: Bio = {name: ''}
  @Input() endpoint: string = 'items'

  items$: Observable<Bio[]>
  itemSub: Subscription
  
  constructor(private itemService: ItemService) { 
  }

  ngOnInit(): void {
    this.itemService.fetchAll(this.endpoint)
    this.items$ = this.itemService.getItemsUpdated()
  }

  ngOnDestroy(): void {
    this.itemSub.unsubscribe()
  }

}
