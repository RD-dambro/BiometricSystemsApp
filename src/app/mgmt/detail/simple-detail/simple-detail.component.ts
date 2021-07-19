import { Component, Input, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Bio } from '../../models';

@Component({
  selector: 'app-simple-detail',
  templateUrl: './simple-detail.component.html',
  styleUrls: ['./simple-detail.component.scss']
})
export class SimpleDetailComponent implements OnInit, OnDestroy {
  @Input() item_ref: Observable<Bio> = undefined
  @Input() item: Bio = undefined

  sub: Subscription 
  hidden: boolean
  

  constructor() { }

  ngOnInit(): void {
    if(!!this.item_ref)this.sub = this.item_ref.subscribe( res => this.item = res)
  }

  ngOnDestroy(): void {
    console.log("destroy detail")
    if(!!this.sub)this.sub.unsubscribe()
  }

}
