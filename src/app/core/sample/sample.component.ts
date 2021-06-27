import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Sample } from '../items/item.model';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  @Input() sample: Sample = new Sample()
  rest: RestService
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
