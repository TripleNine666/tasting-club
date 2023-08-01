import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbUserModule,
  NbInputModule,
  NbFormFieldModule,
  NbButtonGroupModule,
  NbCheckboxModule
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
  ],
  exports: [
    NbButtonModule,
    NbUserModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonGroupModule,
    NbCheckboxModule
  ]
})
export class NebularModule { }
