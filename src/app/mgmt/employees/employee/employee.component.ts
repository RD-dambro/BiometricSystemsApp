import { Component, OnInit } from '@angular/core';
import { employeeFormTemplate, employeeRelationLookup } from '../../models';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  endpoint='employees'
  ft = employeeFormTemplate
  rl = employeeRelationLookup

  constructor() { }

  ngOnInit(): void {
  }

}
