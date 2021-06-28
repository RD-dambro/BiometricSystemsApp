import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whitelist',
  templateUrl: './whitelist.component.html',
  styleUrls: ['./whitelist.component.scss']
})
export class WhitelistComponent implements OnInit {
  components = [
    'create',
    'list',
    'detail'
  ]  
  constructor() { }

  ngOnInit(): void {
  }

}
