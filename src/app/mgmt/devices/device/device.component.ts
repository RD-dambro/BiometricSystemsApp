import { Component, OnInit } from '@angular/core';
import { deviceFormTemplate, deviceRelationLookup, IWhitelist } from '../../models';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit { 
  endpoint = 'devices'
  ft = deviceFormTemplate
  rl = deviceRelationLookup

  constructor() { }

  ngOnInit(): void {
  }

}
