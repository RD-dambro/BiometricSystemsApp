import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './core/device/device.component';
import { EmployeeComponent } from './core/employee/employee.component';
import { GalleryComponent } from './core/gallery/gallery.component';
import { HomeComponent } from './mgmt/home/home.component';
import { PathNotFoundComponent } from './core/path-not-found/path-not-found.component';
import { SampleComponent } from './core/sample/sample.component';
import { WhitelistComponent } from './core/whitelist/whitelist.component';
import { DeviceCreateComponent } from './mgmt/devices/device-create/device-create.component';
import { WhitelistCreateComponent } from './mgmt/whitelists/whitelist-create/whitelist-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'devices', component: DeviceCreateComponent},
  { path: 'whitelists', component: WhitelistCreateComponent},
  { path: 'galleries', component: GalleryComponent},
  { path: 'employees', component: EmployeeComponent},
  { path: 'samples', component: SampleComponent},
  { path: '**', component: PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
