import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' 
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bio, deviceFormTemplate, deviceRelationLookup, ISimpleComponent, IWhitelist } from '../../models';
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
  @Input() next: string = undefined
  
  @Output() itemCreated = new EventEmitter()

  // endpoint: string = null
  // formTemplate: {[key: string]: any} = null
  // relationLookup: {[key: string]: string} = null

  // itemCreated = new EventEmitter()
  relationList: string[]
  

  myForm: FormGroup
  relations: Observable<IResult>

  submit = () => {
    if (this.myForm.valid) 
    {
      this.rs.addItem(this.myForm.value, this.endpoint)
        .subscribe(data => this.itemCreated.emit(data))
      console.log(this.next)
      if(this.next != undefined){  
        this.router.navigate([this.next])
      }
    }
  }

  constructor(
    private fb: FormBuilder, 
    private rs: RestService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    let r = this.route.data.subscribe(data =>{
      if(Object.keys(data).length > 0){
        let d = data as ISimpleComponent;
        this.relationLookup = d.relationLookup
        this.formTemplate = d.formTemplate
        this.endpoint = d.endpoint
        this.next = d.next
      }

      this.relationList = [...Object.values(this.relationLookup)]

      this.rs.fetchList(this.relationList)
      this.relations = this.rs.getRelationsUpdated()
      this.myForm = this.fb.group(this.formTemplate)
    })
    console.log("oninit")
    
    // this.relationList = [...Object.values(this.relationLookup)]

    // this.rs.fetchList(this.relationList)
    // this.relations = this.rs.getRelationsUpdated()
    // // console.log(this.formTemplate)
    // this.myForm = this.fb.group(this.formTemplate)
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
