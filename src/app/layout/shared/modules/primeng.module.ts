import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    PasswordModule,
    CheckboxModule,
    MenuModule,
    PaginatorModule,
    TableModule,
    CalendarModule
  ],
  exports:[ButtonModule,CheckboxModule,SidebarModule,PasswordModule,MenuModule,PaginatorModule,TableModule]
})
export class PrimengModule { }
