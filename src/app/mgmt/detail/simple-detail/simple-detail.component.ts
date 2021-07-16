import { Component, Input, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Bio } from '../../models';

@Component({
  selector: 'app-simple-detail',
  templateUrl: './simple-detail.component.html',
  styleUrls: ['./simple-detail.component.scss']
})
export class SimpleDetailComponent implements OnInit, OnDestroy {
  @Input() item: Observable<Bio>

  sub: Subscription 
  hidden: boolean
  

  constructor() { }

  ngOnInit(): void {
    this.sub = this.item.subscribe()
  }

  ngOnDestroy(): void {
    console.log("destroy detail")
    this.sub.unsubscribe()
  }

}
