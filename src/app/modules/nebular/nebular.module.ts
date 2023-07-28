import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbLayoutModule, NbButtonModule, NbUserModule, NbInputModule, NbFormFieldModule} from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbUserModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
  ],
  exports: [
    NbLayoutModule,
    NbButtonModule,
    NbUserModule,
    NbInputModule,
    NbFormFieldModule,

  ]
})
export class NebularModule { }
