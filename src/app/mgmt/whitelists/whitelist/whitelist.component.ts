import { Component, OnInit } from '@angular/core';
import { whitelistFormTemplate, whitelistRelationLookup } from '../../models';

@Component({
  selector: 'app-whitelist',
  templateUrl: './whitelist.component.html',
  styleUrls: ['./whitelist.component.scss']
})
export class WhitelistComponent implements OnInit {
  endpoint='whitelists'
  ft = whitelistFormTemplate
  rl = whitelistRelationLookup
  constructor() { }

  ngOnInit(): void {
  }

}
