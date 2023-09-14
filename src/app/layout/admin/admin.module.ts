import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { YonetimPaneliComponent } from './pages/yonetim-paneli/yonetim-paneli.component';
import { KullaniciIslemleriComponent } from './pages/yonetim-paneli/kullanici-islemleri/kullanici-islemleri.component';
import { BuroIslemleriComponent } from './pages/yonetim-paneli/buro-islemleri/buro-islemleri.component';
import { PrimengModule } from '../shared/modules/primeng.module';
import { KisiIslemleriComponent } from './pages/kisi-islemleri/kisi-islemleri.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { DavaComponent } from './pages/dava/dava.component';
import { IcraComponent } from './pages/icra/icra.component';
import { CariIslemlerComponent } from './pages/cari-islemler/cari-islemler.component';
import { ArsivComponent } from './pages/arsiv/arsiv.component';
import { DemirbasComponent } from './pages/demirbas/demirbas.component';
import { KutuphaneComponent } from './pages/kutuphane/kutuphane.component';
import { AraclarComponent } from './pages/araclar/araclar.component';
import { IletisimComponent } from './pages/iletisim/iletisim.component';
import { DanismaComponent } from './pages/danisma/danisma.component';
import { YeniDanismaComponent } from './pages/danisma/yeni-danisma/yeni-danisma.component';
import { DanismaListesiComponent } from './pages/danisma/danisma-listesi/danisma-listesi.component';
import { YeniDavaComponent } from './pages/dava/yeni-dava/yeni-dava.component';
import { DavaListesiComponent } from './pages/dava/dava-listesi/dava-listesi.component';
import { KurumIslemleriComponent } from './pages/dava/kurum-islemleri/kurum-islemleri.component';
import { DurusmaListesiComponent } from './pages/dava/durusma-listesi/durusma-listesi.component';
import { YeniIcraComponent } from './pages/icra/yeni-icra/yeni-icra.component';
import { IcraListesiComponent } from './pages/icra/icra-listesi/icra-listesi.component';
import { IcraDaireIslemleriComponent } from './pages/icra/icra-daire-islemleri/icra-daire-islemleri.component';
import { YeniTahsilatComponent } from './pages/cari-islemler/yeni-tahsilat/yeni-tahsilat.component';
import { CariIslemGecmisiComponent } from './pages/cari-islemler/cari-islem-gecmisi/cari-islem-gecmisi.component';
import { CarilerComponent } from './pages/cari-islemler/cariler/cariler.component';
import { CariHesapIslemAdlariComponent } from './pages/cari-islemler/cari-hesap-islem-adlari/cari-hesap-islem-adlari.component';
import { YeniOdemeComponent } from './pages/cari-islemler/yeni-odeme/yeni-odeme.component';
import { ArsivListesiComponent } from './pages/arsiv/arsiv-listesi/arsiv-listesi.component';
import { ArsivTurleriComponent } from './pages/arsiv/arsiv-turleri/arsiv-turleri.component';
import { DemirbasListesiComponent } from './pages/demirbas/demirbas-listesi/demirbas-listesi.component';
import { LokasyonListesiComponent } from './pages/demirbas/lokasyon-listesi/lokasyon-listesi.component';
import { KutuphaneListesiComponent } from './pages/kutuphane/kutuphane-listesi/kutuphane-listesi.component';
import { OduncYayinlarListesiComponent } from './pages/kutuphane/odunc-yayinlar-listesi/odunc-yayinlar-listesi.component';
import { DosyaKayitComponent } from './pages/araclar/dosya-kayit/dosya-kayit.component';
import { MevzuatComponent } from './pages/araclar/mevzuat/mevzuat.component';
import { DilekcelerComponent } from './pages/araclar/dilekceler/dilekceler.component';
import { HesaplamaAraclariComponent } from './pages/araclar/hesaplama-araclari/hesaplama-araclari.component';
import { StandartFaizlerComponent } from './pages/araclar/standart-faizler/standart-faizler.component';
import { FaturaIslemleriComponent } from './pages/araclar/fatura-islemleri/fatura-islemleri.component';
import { KullaniciTercihleriComponent } from './pages/araclar/kullanici-tercihleri/kullanici-tercihleri.component';
import { IletisimBilgileriComponent } from './pages/iletisim/iletisim-bilgileri/iletisim-bilgileri.component';
import { SikcaSorulanSorularComponent } from './pages/iletisim/sikca-sorulan-sorular/sikca-sorulan-sorular.component';
import { TaleplerComponent } from './pages/iletisim/talepler/talepler.component';
import { KullanimKilavuzlariComponent } from './pages/iletisim/kullanim-kilavuzlari/kullanim-kilavuzlari.component';
import { YardimVideolariComponent } from './pages/iletisim/yardim-videolari/yardim-videolari.component';
import { YayinlarComponent } from './pages/kutuphane/yayinlar/yayinlar.component';
import { YayinTurleriComponent } from './pages/kutuphane/yayin-turleri/yayin-turleri.component';


@NgModule({
  declarations: [
    AnasayfaComponent,
    AdminLayoutComponent,
    YonetimPaneliComponent,
    BuroIslemleriComponent,
    KullaniciIslemleriComponent,
    KisiIslemleriComponent,
    DavaComponent,
    IcraComponent,
    CariIslemlerComponent,
    ArsivComponent,
    DemirbasComponent,
    KutuphaneComponent,
    AraclarComponent,
    IletisimComponent,
    DanismaComponent,
    YeniDanismaComponent,
    DanismaListesiComponent,
    YeniDavaComponent,
    DavaListesiComponent,
    KurumIslemleriComponent,
    DurusmaListesiComponent,
    YeniIcraComponent,
    IcraListesiComponent,
    IcraDaireIslemleriComponent,
    YeniTahsilatComponent,
    CariIslemGecmisiComponent,
    CarilerComponent,
    CariHesapIslemAdlariComponent,
    YeniOdemeComponent,
    ArsivListesiComponent,
    ArsivTurleriComponent,
    DemirbasListesiComponent,
    LokasyonListesiComponent,
    KutuphaneListesiComponent,
    OduncYayinlarListesiComponent,
    DosyaKayitComponent,
    MevzuatComponent,
    DilekcelerComponent,
    HesaplamaAraclariComponent,
    StandartFaizlerComponent,
    FaturaIslemleriComponent,
    KullaniciTercihleriComponent,
    IletisimBilgileriComponent,
    SikcaSorulanSorularComponent,
    TaleplerComponent,
    KullanimKilavuzlariComponent,
    YardimVideolariComponent,
    YayinlarComponent,
    YayinTurleriComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    PrimengModule,
    CommonModule
  ]
})
export class AdminModule { }
