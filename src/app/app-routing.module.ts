import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mgmt/home/home.component';

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
