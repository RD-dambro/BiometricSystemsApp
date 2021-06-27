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



@NgModule({
  declarations: [HomeComponent, DeviceCreateComponent, DeviceListComponent, DeviceDetailComponent, WhitelistCreateComponent, WhitelistDetailComponent, WhitelistListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MgmtModule { }
