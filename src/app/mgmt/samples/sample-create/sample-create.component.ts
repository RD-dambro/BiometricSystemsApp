import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models';
import { RestService } from '../../rest.service';

interface IResult {
  [key: string]: IEmployee[]
}

@Component({
  selector: 'app-sample-create',
  templateUrl: './sample-create.component.html',
  styleUrls: ['./sample-create.component.scss']
})
export class SampleCreateComponent implements OnInit {

  myForm: FormGroup
  relations: Observable<IResult[]>

  submit = () => {if (this.myForm.valid) this.rs.addItem(this.myForm.value, 'samples')}

  constructor(private fb: FormBuilder, private rs: RestService) { 
    this.rs.fetchAll(['employees'])
    this.relations = this.rs.getItemsUpdated()
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: [],
      employee: null
    })
  }

}
