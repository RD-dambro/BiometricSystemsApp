import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { deviceFormTemplate, deviceRelationLookup, IDevice, IWhitelist } from '../../models';
import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit, OnDestroy { 
  endpoint = 'devices'
  ft = deviceFormTemplate
  rl = deviceRelationLookup

  // set next item to object from event
  // app-video will reload based on the item selected
  onItemSelected = (event) =>{
    this.ss.updateSource(event.name)
  }
  constructor(
    private ss: StreamService
  ) { }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

}
