import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MatGridListModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MatInputModule
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MatGridListModule,
    MatInputModule
  ]
})
export class MaterialModule {}