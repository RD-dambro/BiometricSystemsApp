import { Component, OnInit } from '@angular/core';
import { sampleFormTemplate, sampleRelationLookup } from '../../models';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  endpoint='samples'
  ft = sampleFormTemplate
  rl = sampleRelationLookup
  constructor() { }

  ngOnInit(): void {
  }

}
