import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Bio } from '../../models';
import { CreateItemService } from '../../services/create-item.service';
import { RestService } from '../../services/rest.service';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-save-sample',
  templateUrl: './save-sample.component.html',
  styleUrls: ['./save-sample.component.scss']
})
export class SaveSampleComponent implements OnInit {
  myForm: FormGroup
  devices: Observable<Bio[]>
  employee: Bio = undefined
  constructor(
    private worker: WorkerService,
    private cis: CreateItemService,
    private web: RestService,
    private fb: FormBuilder,
  ) { }

  submit = () => {
    if(this.myForm.valid)
      this.worker.sendSaveRequest(this.myForm.value.device, this.myForm.value.employee)
  }
  ngOnInit(): void {
    
    this.devices = this.web.getItemsUpdated()
    this.web.fetchItems("devices")
    this.employee = this.cis.last_item

    this.myForm = this.fb.group({
      employee: [this.employee],
      device: ['', Validators.required]
    })

    // biometricsystems client
    // this.client_manager = `${employee.name}.state`
    // this.worker_manager = `${employee.name}.action`
    // biometricsystems worker

    // send action "save" and employee to worker
  }

}
