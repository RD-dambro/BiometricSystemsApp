import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IEmployee, IWhitelist } from '../../models';
import { RestService } from '../../rest.service';

interface IResult {
  [key: string]: IEmployee[] | IWhitelist[]
}

@Component({
  selector: 'app-gallery-create',
  templateUrl: './gallery-create.component.html',
  styleUrls: ['./gallery-create.component.scss']
})
export class GalleryCreateComponent implements OnInit {

  myForm: FormGroup
  relations: Observable<IResult[]>

  submit = () => {if (this.myForm.valid) this.rs.addItem(this.myForm.value, 'galleries')}

  constructor(private fb: FormBuilder, private rs: RestService) { 
    this.rs.fetchAll(['whitelists', 'employees'])
    this.relations = this.rs.getItemsUpdated()
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: [],
      whitelists: null,
      employees: null
    })
  }

}
