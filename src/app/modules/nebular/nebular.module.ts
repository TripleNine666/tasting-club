import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbUserModule,
  NbInputModule,
  NbFormFieldModule,
  NbButtonGroupModule,
  NbCheckboxModule, NbCardModule, NbTabsetModule, NbBadgeModule, NbAlertModule
} from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbUserModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonGroupModule,
    NbCheckboxModule,
    NbCardModule,
    NbTabsetModule,
    NbBadgeModule,
    NbAlertModule,

  ],
  exports: [
    NbButtonModule,
    NbUserModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonGroupModule,
    NbCheckboxModule,
    NbCardModule,
    NbTabsetModule,
    NbBadgeModule,
    NbAlertModule,
  ]
})
export class NebularModule { }
