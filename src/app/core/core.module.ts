import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeviceComponent } from './device/device.component';
import { SampleComponent } from './sample/sample.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WhitelistComponent } from './whitelist/whitelist.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ItemCreateComponent } from './items/item-create/item-create.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemUpdateComponent } from './items/item-update/item-update.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DeviceComponent, 
    SampleComponent, 
    GalleryComponent, 
    WhitelistComponent, 
    EmployeeComponent, 
    HomeComponent, 
    PathNotFoundComponent, 
    ItemCreateComponent, 
    ItemListComponent, 
    ItemUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    DeviceComponent, 
    SampleComponent, 
    GalleryComponent, 
    WhitelistComponent, 
    EmployeeComponent, 
    ItemCreateComponent
  ],
})
export class CoreModule { }
