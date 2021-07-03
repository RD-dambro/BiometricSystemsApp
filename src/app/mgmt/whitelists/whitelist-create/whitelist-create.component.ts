import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDevice, IEmployee, IGallery } from '../../models';
import { RestService } from '../../rest.service';

interface IResult {
  [key: string]: IDevice[] | IEmployee[] | IGallery[]
}

@Component({
  selector: 'app-whitelist-create',
  templateUrl: './whitelist-create.component.html',
  styleUrls: ['./whitelist-create.component.scss']
})
export class WhitelistCreateComponent implements OnInit {

  myForm: FormGroup
  relations: Observable<IResult[]>

  submit = () => {if (this.myForm.valid) this.rs.addItem(this.myForm.value, 'whitelists')}

  constructor(private fb: FormBuilder, private rs: RestService) { 
    this.rs.fetchList(['devices', 'galleries', 'employees'])
    this.relations = this.rs.getRelationsUpdated()
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: [],
      devices: null,
      galleries: null,
      employees: null
    })
  }

  get name() {
    return this.myForm.get('name')
  }
}
