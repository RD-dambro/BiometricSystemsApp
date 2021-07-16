import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mgmt/home/home.component';

import { DeviceComponent } from './mgmt/devices/device/device.component';
import { WhitelistComponent } from './mgmt/whitelists/whitelist/whitelist.component';
import { EmployeeComponent } from './mgmt/employees/employee/employee.component';
import { GalleryComponent } from './mgmt/galleries/gallery/gallery.component';
import { SampleComponent } from './mgmt/samples/sample/sample.component';
import { PathNotFoundComponent } from './mgmt/path-not-found/path-not-found.component';
import { VideoComponent } from './video/video.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SimpleCreateComponent } from './mgmt/create/simple-create/simple-create.component';
import { deviceFormTemplate, deviceRelationLookup, employeeFormTemplate, employeeRelationLookup, galleryFormTemplate, galleryRelationLookup, sampleFormTemplate, sampleRelationLookup, whitelistFormTemplate, whitelistRelationLookup } from './mgmt/models';
import { SimplePreviewComponent } from './mgmt/preview/simple-preview/simple-preview.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    {
      path: 'devices', 
      component: DeviceComponent, 
      children: [ 
        {path: 'video', component: VideoComponent} 
      ]
    },
    {
      path: 'employees', 
      component: EmployeeComponent, 
    },
    {
      path: 'samples', 
      component: SampleComponent, 
    },
    {
      path: 'galleries', 
      component: GalleryComponent, 
    },
    {
      path: 'whitelists', 
      component: WhitelistComponent, 
    },
    { path: 'get-started', component: GetStartedComponent,
      children: [
        {
          path: 'device', 
          component: SimpleCreateComponent,
          data:{ 
            endpoint: 'devices',
            formTemplate: deviceFormTemplate,
            relationLookup: deviceRelationLookup,
            next: 'get-started/employee'
          }
        },
        {
          path: 'employee', 
          component: SimpleCreateComponent, 
          data:{
            endpoint: 'employees',
            formTemplate: employeeFormTemplate,
            relationLookup: employeeRelationLookup,
            next: 'get-started/sample'
          }
        },
        {
          path: 'sample', 
          component: SimpleCreateComponent, 
          data:{
            endpoint: 'samples',
            formTemplate: sampleFormTemplate,
            relationLookup: sampleRelationLookup,
            next: 'get-started/gallery'
          }
        },
        {
          path: 'gallery', 
          component: SimpleCreateComponent, 
          data:{
            endpoint: 'galleries',
            formTemplate: galleryFormTemplate,
            relationLookup: galleryRelationLookup,
            next: 'get-started/whitelist'
          }
        },
        {
          path: 'whitelist', 
          component: SimpleCreateComponent, 
          data:{
            endpoint: 'whitelists',
            formTemplate: whitelistFormTemplate,
            relationLookup: whitelistRelationLookup,
            next: ''
          }
        },
      ]
    },
  ]
  },

  
  
  { path: '**', component: PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
