import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IGallery, ISample, IWhitelist } from '../../models';
import { RestService } from '../../rest.service';


interface IResult {
  [key: string]: IGallery[] | ISample[] | IWhitelist[]
}

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  myForm: FormGroup
  relations: Observable<IResult[]>

  submit = () => {if (this.myForm.valid) this.rs.addItem(this.myForm.value, 'employees')}

  constructor(private fb: FormBuilder, private rs: RestService) { 
    this.rs.fetchAll(['samples', 'galleries', 'whitelists'])
    this.relations = this.rs.getItemsUpdated()
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: [],
      samples: null,
      galleries: null,
      whitelists: null
    })
  }

}
