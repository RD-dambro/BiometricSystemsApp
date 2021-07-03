import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bio, deviceFormTemplate, deviceRelationLookup } from '../../models';
import { RestService } from '../../rest.service';

interface IResult {
  [key: string]: Bio[]
}

@Component({
  selector: 'app-simple-preview',
  templateUrl: './simple-preview.component.html',
  styleUrls: ['./simple-preview.component.scss']
})
export class SimplePreviewComponent implements OnInit {
  @Input() endpoint: string = 'devices'
  @Input() formTemplate: {[key: string]: any} = deviceFormTemplate
  @Input() relationLookup: {[key: string]: string} = deviceRelationLookup
  
  items: Observable<Bio[]>
  detail: Observable<Bio>

  showDetail = false
  toCreate = false

  onDetail= (item) => {
    this.rs.fetchDetail(this.endpoint, item)
    this.showDetail = !!this.detail
  }

  onItemCreated = (data) => {
    console.log(data)
    this.toCreate = !data
    this.rs.fetchItems(this.endpoint)
  }
  create = () => {
    this.toCreate = true
  }
  
  constructor(private rs: RestService) { }

  ngOnInit(): void {
    this.rs.fetchItems(this.endpoint)
    this.items = this.rs.getItemsUpdated()
    this.detail = this.rs.getDetailUpdated()
  }

}
