import { NgModule } from '@angular/core';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    SharedModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
