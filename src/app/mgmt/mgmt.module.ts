import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

import { DeviceComponent } from './devices/device/device.component';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeComponent } from './employees/employee/employee.component';
import { GalleryComponent } from './galleries/gallery/gallery.component';
import { SampleComponent } from './samples/sample/sample.component';
import { WhitelistComponent } from './whitelists/whitelist/whitelist.component';

import { SimplePreviewComponent } from './preview/simple-preview/simple-preview.component';
import { SimpleCreateComponent } from './create/simple-create/simple-create.component';
import { SimpleDetailComponent } from './detail/simple-detail/simple-detail.component';



@NgModule({
  declarations: [
    HomeComponent, 
    DeviceComponent, 
    EmployeeComponent, 
    GalleryComponent, 
    SampleComponent, 
    WhitelistComponent, 
    PathNotFoundComponent, 
    SimplePreviewComponent, 
    SimpleCreateComponent, 
    SimpleDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class MgmtModule { }
