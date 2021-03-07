import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { PhonesComponent } from './phones.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PhonesComponent],
  imports: [
    CommonModule,
    PhonesRoutingModule,
    SharedModule
  ]
})
export class PhonesModule { }
