import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    SidebarModule,
    PasswordModule,
    CheckboxModule,
    MenuModule
  ],
  exports:[ButtonModule,CheckboxModule,SidebarModule,PasswordModule,MenuModule]
})
export class PrimengModule { }
