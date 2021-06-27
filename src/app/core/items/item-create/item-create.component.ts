import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bio } from '../item.model';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {
  @Input() template: Bio = {name: ''}
  @Input() endpoint: string = 'items'
  // @Output() itemCreated = new EventEmitter<Bio>()

  post = (item: NgForm) => {
    // this.itemCreated.emit(item.form.value)
    this.itemService.addItem(item.form.value, this.endpoint)
  }
  constructor(private itemService: ItemService) { 
  }

  ngOnInit(): void {
  }

}
