import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Employee } from '../items/item.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee = new Employee()
  rest: RestService

  constructor() { 
  }

  ngOnInit(): void {
  }

}
