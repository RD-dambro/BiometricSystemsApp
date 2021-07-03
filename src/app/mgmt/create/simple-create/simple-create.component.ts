import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' 
import { Observable } from 'rxjs';
import { Bio, deviceFormTemplate, deviceRelationLookup, IWhitelist } from '../../models';
import { RestService } from '../../rest.service';

interface IResult {
  [key: string]: Bio[]
}

@Component({
  selector: 'app-simple-create',
  templateUrl: './simple-create.component.html',
  styleUrls: ['./simple-create.component.scss']
})
export class SimpleCreateComponent implements OnInit, OnDestroy {
  @Input() endpoint: string = 'devices'
  @Input() formTemplate: {[key: string]: any} = deviceFormTemplate
  @Input() relationLookup: {[key: string]: string} = deviceRelationLookup

  @Output() itemCreated = new EventEmitter()

  relationList: string[] = [...Object.values(this.relationLookup)]

  myForm: FormGroup
  relations: Observable<IResult[]>

  submit = () => {
    if (this.myForm.valid) 
    {
      this.rs.addItem(this.myForm.value, this.endpoint)
        .subscribe(data => this.itemCreated.emit(data))
    }
  }

  constructor(private fb: FormBuilder, private rs: RestService) { 
    
  }

  ngOnInit(): void {
    this.rs.fetchList(this.relationList)
    this.relations = this.rs.getRelationsUpdated()
    // console.log(this.formTemplate)
    this.myForm = this.fb.group(this.formTemplate)
  }

  ngOnDestroy(): void {
    console.log("destroy")
    // this.rs.destroy()
    // this.relations = undefined
    // this.myForm = undefined
  }

  get name() {
    return this.myForm.get('name')
  }

}
