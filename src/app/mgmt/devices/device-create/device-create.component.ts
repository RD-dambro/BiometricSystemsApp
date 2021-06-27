import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' 
import { Observable } from 'rxjs';
import { IWhitelist } from '../../models';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.scss']
})
export class DeviceCreateComponent implements OnInit {
  myForm: FormGroup
  whitelists: Observable<IWhitelist[]>

  submit = () => {if (this.myForm.valid) this.rs.addItem(this.myForm.value, 'devices')}

  constructor(private fb: FormBuilder, private rs: RestService) { 
    this.rs.fetchAll('whitelists')
    this.whitelists = this.rs.getItemsUpdated()
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
