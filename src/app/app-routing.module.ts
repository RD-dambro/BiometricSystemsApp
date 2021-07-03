import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mgmt/home/home.component';

import { DeviceCreateComponent } from './mgmt/devices/device-create/device-create.component';
import { DeviceListComponent } from './mgmt/devices/device-list/device-list.component';
import { DeviceDetailComponent } from './mgmt/devices/device-detail/device-detail.component';

import { WhitelistCreateComponent } from './mgmt/whitelists/whitelist-create/whitelist-create.component';
import { WhitelistListComponent } from './mgmt/whitelists/whitelist-list/whitelist-list.component';
import { WhitelistDetailComponent } from './mgmt/whitelists/whitelist-detail/whitelist-detail.component';

import { EmployeeListComponent } from './mgmt/employees/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './mgmt/employees/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './mgmt/employees/employee-detail/employee-detail.component';

import { GalleryListComponent } from './mgmt/galleries/gallery-list/gallery-list.component';
import { GalleryCreateComponent } from './mgmt/galleries/gallery-create/gallery-create.component';
import { GalleryDetailComponent } from './mgmt/galleries/gallery-detail/gallery-detail.component';

import { SampleListComponent } from './mgmt/samples/sample-list/sample-list.component';
import { SampleCreateComponent } from './mgmt/samples/sample-create/sample-create.component';
import { SampleDetailComponent } from './mgmt/samples/sample-detail/sample-detail.component';
import { DeviceComponent } from './mgmt/devices/device/device.component';
import { WhitelistComponent } from './mgmt/whitelists/whitelist/whitelist.component';
import { EmployeeComponent } from './mgmt/employees/employee/employee.component';
import { GalleryComponent } from './mgmt/galleries/gallery/gallery.component';
import { SampleComponent } from './mgmt/samples/sample/sample.component';
import { PathNotFoundComponent } from './mgmt/path-not-found/path-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      {path: 'devices', component: DeviceComponent},
      {path: 'employees', component: EmployeeComponent},
      {path: 'samples', component: SampleComponent},
      {path: 'galleries', component: GalleryComponent},
      {path: 'whitelists', component: WhitelistComponent}
    ]

  },
  
  { path: '**', component: PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
