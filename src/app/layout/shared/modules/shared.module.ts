import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng.module';
import { AppTopBarComponent } from '../components/topbar/app.topbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenusComponent } from 'src/app/demo/components/uikit/menus/menus.component';
import { AppMenuComponent } from '../components/menu/app.menu.component';
import { AppSidebarComponent } from '../components/sidebar/app.sidebar.component';
import { AppConfigComponent } from '../components/config/app.config.component';
import { AppFooterComponent } from '../components/footer/app.footer.component';



@NgModule({
  declarations: [AppTopBarComponent,AppMenuComponent,AppSidebarComponent,AppConfigComponent,AppFooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PrimengModule
  ],
  exports:[
    AppTopBarComponent,
    AppMenuComponent,
    AppSidebarComponent,
    AppConfigComponent,
    AppFooterComponent
  ]
})
export class SharedModule { }
