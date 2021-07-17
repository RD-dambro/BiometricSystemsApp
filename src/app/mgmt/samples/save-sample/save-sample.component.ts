import { Component, OnInit } from '@angular/core';
import { CreateItemService } from '../../services/create-item.service';
import { RabbitService } from '../../services/rabbit.service';

@Component({
  selector: 'app-save-sample',
  templateUrl: './save-sample.component.html',
  styleUrls: ['./save-sample.component.scss']
})
export class SaveSampleComponent implements OnInit {

  constructor(
    private rabbit: RabbitService,
    private cis: CreateItemService
  ) { }

  ngOnInit(): void {
    console.log(this.cis.last_item)
  }

}
