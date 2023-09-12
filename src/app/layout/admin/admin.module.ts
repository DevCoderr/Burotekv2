import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { YonetimPaneliComponent } from './pages/yonetim-paneli/yonetim-paneli.component';
import { KullaniciIslemleriComponent } from './pages/yonetim-paneli/kullanici-islemleri/kullanici-islemleri.component';
import { BuroIslemleriComponent } from './pages/yonetim-paneli/buro-islemleri/buro-islemleri.component';


@NgModule({
  declarations: [
    AnasayfaComponent,AdminLayoutComponent, YonetimPaneliComponent, BuroIslemleriComponent,
 KullaniciIslemleriComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
