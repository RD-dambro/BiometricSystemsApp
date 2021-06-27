import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Whitelist } from '../items/item.model';

@Component({
  selector: 'app-whitelist',
  templateUrl: './whitelist.component.html',
  styleUrls: ['./whitelist.component.scss']
})
export class WhitelistComponent implements OnInit {
  @Input() whitelist: Whitelist = new Whitelist()
  rest: RestService

  constructor() {
    this.rest = new RestService('whitelist')
   }

  ngOnInit(): void {
  }

}
