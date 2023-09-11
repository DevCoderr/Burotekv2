import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { PrimengModule } from '../shared/modules/primeng.module';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { BasvuruGirisComponent } from './pages/basvuru-giris/basvuru-giris.component';
import { HakkimizdaComponent } from './pages/hakkimizda/hakkimizda.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AvukatBilgileriComponent } from './pages/basvuru-giris/avukat-bilgileri/avukat-bilgileri.component';
import { SharedModule } from '../shared/modules/shared.module';
import { SifremiUnuttumComponent } from './pages/sifremi-unuttum/sifremi-unuttum.component';
import { BuroBilgileriComponent } from './pages/basvuru-giris/buro-bilgileri/buro-bilgileri.component';
import { OdemeBilgileriComponent } from './pages/basvuru-giris/odeme-bilgileri/odeme-bilgileri.component';




@NgModule({
  declarations: [LoginComponent, HakkimizdaComponent, BasvuruGirisComponent,PublicLayoutComponent,AvukatBilgileriComponent, SifremiUnuttumComponent,BuroBilgileriComponent,OdemeBilgileriComponent,],
  imports: [

    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PublicRoutingModule,
    PrimengModule,
    CommonModule,


  ]
})
export class PublicModule { }
