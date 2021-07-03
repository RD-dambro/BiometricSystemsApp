import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bio } from '../../models';

@Component({
  selector: 'app-simple-detail',
  templateUrl: './simple-detail.component.html',
  styleUrls: ['./simple-detail.component.scss']
})
export class SimpleDetailComponent implements OnInit {

  @Input() item: Observable<Bio>

  constructor() { }

  ngOnInit(): void {
  }

}
