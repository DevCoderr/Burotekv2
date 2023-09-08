import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    ButtonModule,
    SidebarModule
  ],
  exports:[ButtonModule,SidebarModule]
})
export class PrimengModule { }
