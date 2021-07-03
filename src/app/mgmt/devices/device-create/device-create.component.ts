import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' 
import { Observable } from 'rxjs';
import { IWhitelist } from '../../models';
import { RestService } from '../../rest.service';

interface IResult {
  [key: string]: IWhitelist[]
}

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.scss']
})
export class DeviceCreateComponent implements OnInit, OnDestroy {
  myForm: FormGroup
  relations: Observable<IResult[]>

  submit = () => {if (this.myForm.valid) this.rs.addItem(this.myForm.value, 'devices')}

  constructor(private fb: FormBuilder, private rs: RestService) { 
    
  }

  ngOnInit(): void {
    this.rs.fetchList(['whitelists'])
    this.relations = this.rs.getRelationsUpdated()

    this.myForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: [],
      whitelist: null
    })
  }

  ngOnDestroy(): void {
    console.log("destroy")
    this.rs.destroy()
    this.relations = undefined
    this.myForm = undefined
  }

  get name() {
    return this.myForm.get('name')
  }

}
