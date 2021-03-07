import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [NavBarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavBarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
