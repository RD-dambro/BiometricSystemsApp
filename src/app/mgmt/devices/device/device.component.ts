import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  components = [
    'create',
    'list',
    'detail'
  ]  
  constructor() { }

  ngOnInit(): void {
  }

}
