import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponentes =[
  MatButtonModule,
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponentes
  ],
  exports: [MaterialComponentes]
})
export class MaterialModule { }
