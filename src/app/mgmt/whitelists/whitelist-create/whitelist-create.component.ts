import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDevice } from '../../models';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-whitelist-create',
  templateUrl: './whitelist-create.component.html',
  styleUrls: ['./whitelist-create.component.scss']
})
export class WhitelistCreateComponent implements OnInit {

  myForm: FormGroup
  devices: Observable<IDevice[]>

  submit = () => {if (this.myForm.valid) this.rs.addItem(this.myForm.value, 'whitelists')}

  constructor(private fb: FormBuilder, private rs: RestService) { 
    this.rs.fetchAll('devices')
    this.devices = this.rs.getItemsUpdated()
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: [],
      whitelist: null
    })
  }

  get name() {
    return this.myForm.get('name')
  }
}
