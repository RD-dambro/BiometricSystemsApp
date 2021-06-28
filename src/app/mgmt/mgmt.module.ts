import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DeviceCreateComponent } from './devices/device-create/device-create.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WhitelistCreateComponent } from './whitelists/whitelist-create/whitelist-create.component';
import { WhitelistDetailComponent } from './whitelists/whitelist-detail/whitelist-detail.component';
import { WhitelistListComponent } from './whitelists/whitelist-list/whitelist-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { GalleryCreateComponent } from './galleries/gallery-create/gallery-create.component';
import { GalleryDetailComponent } from './galleries/gallery-detail/gallery-detail.component';
import { GalleryListComponent } from './galleries/gallery-list/gallery-list.component';
import { SampleCreateComponent } from './samples/sample-create/sample-create.component';
import { SampleListComponent } from './samples/sample-list/sample-list.component';
import { SampleDetailComponent } from './samples/sample-detail/sample-detail.component';
import { DeviceComponent } from './devices/device/device.component';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeComponent } from './employees/employee/employee.component';
import { GalleryComponent } from './galleries/gallery/gallery.component';
import { SampleComponent } from './samples/sample/sample.component';
import { WhitelistComponent } from './whitelists/whitelist/whitelist.component';
import { PatNotFoundComponent } from './pat-not-found/pat-not-found.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';



@NgModule({
  declarations: [HomeComponent, DeviceCreateComponent, DeviceListComponent, DeviceDetailComponent, WhitelistCreateComponent, WhitelistDetailComponent, WhitelistListComponent, EmployeeDetailComponent, EmployeeCreateComponent, EmployeeListComponent, GalleryCreateComponent, GalleryDetailComponent, GalleryListComponent, SampleCreateComponent, SampleListComponent, SampleDetailComponent, DeviceComponent, EmployeeComponent, GalleryComponent, SampleComponent, WhitelistComponent, PatNotFoundComponent, PathNotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class MgmtModule { }
