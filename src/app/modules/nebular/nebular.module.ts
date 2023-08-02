import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbUserModule,
  NbInputModule,
  NbFormFieldModule,
  NbButtonGroupModule,
  NbCheckboxModule, NbCardModule, NbTabsetModule
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
  ]
})
export class NebularModule { }
