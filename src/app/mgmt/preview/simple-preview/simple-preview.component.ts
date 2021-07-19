import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Bio, deviceFormTemplate, deviceRelationLookup, ISimpleComponent } from '../../models';
import { RestService } from '../../services/rest.service';

interface IResult {
  [key: string]: Bio[]
}


@Component({
  selector: 'app-simple-preview',
  templateUrl: './simple-preview.component.html',
  styleUrls: ['./simple-preview.component.scss']
})
export class SimplePreviewComponent implements OnInit, OnDestroy {
  @Input() endpoint: string = 'devices'
  @Input() formTemplate: {[key: string]: any} = deviceFormTemplate
  @Input() relationLookup: {[key: string]: string} = deviceRelationLookup
  @Input() next: string = undefined

  @Output() itemSelected = new EventEmitter()
  // @ViewChild('detRef', {static: false}) detRef: ElementRef;

  path: Observable<any>
  items: Observable<Bio[]>
  detail: Observable<Bio>

  pathSub: Subscription
  itemsSub: Subscription
  detailSub: Subscription

  showDetail = false
  toCreate = false

  onDetailChange= (item) => {
    console.log("detail")
    this.rs.fetchDetail(this.endpoint, item)
  }

  onItemCreated = (data) => {
    console.log(data)
    this.toCreate = !data
    this.rs.fetchItems(this.endpoint)
  }
  create = () => {
    this.toCreate = true
  }
  
  constructor(private rs: RestService, private route: ActivatedRoute, private router:Router) { 
    this.path = this.route.url
  }

  ngOnInit(): void {
    let r = this.route.data.subscribe(data =>{
      if(Object.keys(data).length > 0){
        let d = data as ISimpleComponent;
        console.log(d)
        this.relationLookup = d.relationLookup
        this.formTemplate = d.formTemplate
        this.endpoint = d.endpoint
        this.next = d.next
      }
    })

    this.rs.fetchItems(this.endpoint)
    this.items = this.rs.getItemsUpdated()
    this.detail = this.rs.getDetailUpdated()

    this.itemsSub = this.items.subscribe()
    this.detailSub = this.detail.subscribe(data => {
      this.itemSelected.emit(data)
      console.log("emitting...")
      // this.router.navigate(['/', 'devices', data.name])
    })

  }

  ngOnDestroy():void{
    console.log("destroy preview")
    this.itemsSub.unsubscribe()
    this.detailSub.unsubscribe()
  }
}
