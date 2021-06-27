import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Device } from '../items/item.model';



@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() device: Device = new Device()
  @Input() method: string = 'post'

  id
  devices
  rest: RestService

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

class myForm {}