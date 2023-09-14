import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { KullaniciIslemleriComponent } from './pages/yonetim-paneli/kullanici-islemleri/kullanici-islemleri.component';
import { BuroBilgileriComponent } from '../public/pages/basvuru-giris/buro-bilgileri/buro-bilgileri.component';
import { MuvekkillerComponent } from './pages/kisi-islemleri/muvekkiller/muvekkiller.component';
import { KarsiTarafComponent } from './pages/kisi-islemleri/karsi-taraf/karsi-taraf.component';
import { DigerKisilerComponent } from './pages/kisi-islemleri/diger-kisiler/diger-kisiler.component';
import { KisiIslemleriComponent } from './pages/kisi-islemleri/kisi-islemleri.component';
import { KisiListesiComponent } from './pages/kisi-islemleri/kisi-listesi/kisi-listesi.component';
import { NotListesiComponent } from './pages/notlar/not-listesi/not-listesi.component';
import { YapilacakIslerListesiComponent } from './pages/notlar/yapilacak-isler-listesi/yapilacak-isler-listesi.component';
import { YeniEvrakComponent } from './pages/evrak/yeni-evrak/yeni-evrak.component';
import { EvrakIslemleriComponent } from './pages/evrak/evrak-islemleri/evrak-islemleri.component';
import { YeniDanismaComponent } from './pages/danisma/yeni-danisma/yeni-danisma.component';
import { DanismaListesiComponent } from './pages/danisma/danisma-listesi/danisma-listesi.component';
import { YeniDavaComponent } from './pages/dava/yeni-dava/yeni-dava.component';
import { DurusmaListesiComponent } from './pages/dava/durusma-listesi/durusma-listesi.component';
import { KurumIslemleriComponent } from './pages/dava/kurum-islemleri/kurum-islemleri.component';
import { DavaListesiComponent } from './pages/dava/dava-listesi/dava-listesi.component';
import { YeniIcraComponent } from './pages/icra/yeni-icra/yeni-icra.component';
import { IcraListesiComponent } from './pages/icra/icra-listesi/icra-listesi.component';
import { IcraDaireIslemleriComponent } from './pages/icra/icra-daire-islemleri/icra-daire-islemleri.component';
import { CariHesapIslemAdlariComponent } from './pages/cari-islemler/cari-hesap-islem-adlari/cari-hesap-islem-adlari.component';
import { CarilerComponent } from './pages/cari-islemler/cariler/cariler.component';
import { CariIslemlerComponent } from './pages/cari-islemler/cari-islemler.component';
import { CariIslemGecmisiComponent } from './pages/cari-islemler/cari-islem-gecmisi/cari-islem-gecmisi.component';
import { YeniTahsilatComponent } from './pages/cari-islemler/yeni-tahsilat/yeni-tahsilat.component';
import { YeniOdemeComponent } from './pages/cari-islemler/yeni-odeme/yeni-odeme.component';
import { ArsivListesiComponent } from './pages/arsiv/arsiv-listesi/arsiv-listesi.component';
import { ArsivTurleriComponent } from './pages/arsiv/arsiv-turleri/arsiv-turleri.component';
import { DemirbasListesiComponent } from './pages/demirbas/demirbas-listesi/demirbas-listesi.component';
import { LokasyonListesiComponent } from './pages/demirbas/lokasyon-listesi/lokasyon-listesi.component';
import { OduncYayinlarListesiComponent } from './pages/kutuphane/odunc-yayinlar-listesi/odunc-yayinlar-listesi.component';
import { KutuphaneComponent } from './pages/kutuphane/kutuphane.component';
import { KutuphaneListesiComponent } from './pages/kutuphane/kutuphane-listesi/kutuphane-listesi.component';
import { YayinTurleriComponent } from './pages/kutuphane/yayin-turleri/yayin-turleri.component';
import { YayinlarComponent } from './pages/kutuphane/yayinlar/yayinlar.component';
import { KullaniciTercihleriComponent } from './pages/araclar/kullanici-tercihleri/kullanici-tercihleri.component';
import { FaturaIslemleriComponent } from './pages/araclar/fatura-islemleri/fatura-islemleri.component';
import { StandartFaizlerComponent } from './pages/araclar/standart-faizler/standart-faizler.component';
import { HesaplamaAraclariComponent } from './pages/araclar/hesaplama-araclari/hesaplama-araclari.component';
import { DilekcelerComponent } from './pages/araclar/dilekceler/dilekceler.component';
import { MevzuatComponent } from './pages/araclar/mevzuat/mevzuat.component';
import { DosyaKayitComponent } from './pages/araclar/dosya-kayit/dosya-kayit.component';
import { YardimVideolariComponent } from './pages/iletisim/yardim-videolari/yardim-videolari.component';
import { KullanimKilavuzlariComponent } from './pages/iletisim/kullanim-kilavuzlari/kullanim-kilavuzlari.component';
import { TaleplerComponent } from './pages/iletisim/talepler/talepler.component';
import { IletisimBilgileriComponent } from './pages/iletisim/iletisim-bilgileri/iletisim-bilgileri.component';
import { SikcaSorulanSorularComponent } from './pages/iletisim/sikca-sorulan-sorular/sikca-sorulan-sorular.component';
import { BuroIslemleriComponent } from './pages/yonetim-paneli/buro-islemleri/buro-islemleri.component';

const routes: Routes = [

    {
        path:'',
        pathMatch:'full',
        redirectTo:'anasayfa'
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'anasayfa',
                component: AnasayfaComponent,
            },
            {
                path: 'kullanici-islemleri',
                component: KullaniciIslemleriComponent,
            },
            {
                path: 'buro-islemleri',
                component: BuroIslemleriComponent,
            },
        ],
    },

    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'anasayfa',
                component: AnasayfaComponent,
            },
            {
                path: 'muvekkiller',
                component: MuvekkillerComponent,
            },
            {
                path: 'karsi-taraf',
                component: KarsiTarafComponent,
            },
            {
                path: 'diger-kisiler',
                component: DigerKisilerComponent,
            },
            {
                path: 'kisi-listesi',
                component: KisiListesiComponent,
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'anasayfa',
                component: AnasayfaComponent,
            },
            {
                path: 'not-listesi',
                component: NotListesiComponent,
            },
            {
                path: 'yapilacak-isler-listesi',
                component: YapilacakIslerListesiComponent,
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'anasayfa',
                component: AnasayfaComponent,
            },
            {
                path: 'yeni-evrak',
                component: YeniEvrakComponent,
            },
            {
                path: 'evrak-islemleri',
                component: EvrakIslemleriComponent,
            },
            {
                path: 'kurum-islemleri',
                component: DigerKisilerComponent,
            },
            {
                path: 'belge-türü-islemleri',
                component: KisiListesiComponent,
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'yeni-danisma',
                component: YeniDanismaComponent,
            },
            {
                path: 'danisma-listesi',
                component: DanismaListesiComponent,
                
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'yeni-dava',
                component: YeniDavaComponent,
            },
            {
                path: 'dava-listesi',
                component: DavaListesiComponent,
                
            },
            {
                path: 'kurum-islemleri',
                component: KurumIslemleriComponent,
            },
            {
                path: 'durusma-listesi',
                component: DurusmaListesiComponent,
                
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'yeni-icra',
                component: YeniIcraComponent,
            },
            {
                path: 'icra-listesi',
                component: IcraListesiComponent,
                
            },
            {
                path: 'icra-dairesi-islemleri',
                component: IcraDaireIslemleriComponent,
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'yeni-odeme',
                component: YeniOdemeComponent,
            },
            {
                path: 'yeni-tahsilat',
                component: YeniTahsilatComponent,
                
            },
            {
                path: 'cari-islem-gecmisi',
                component: CariIslemGecmisiComponent,
            },
            {
                path: 'cariler',
                component: CarilerComponent,
                
            },
            {
                path: 'cari-hesap-islem-adlari',
                component: CariHesapIslemAdlariComponent,
                
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'arsiv-listesi',
                component: ArsivListesiComponent,
            },
            {
                path: 'arsiv-türleri',
                component: ArsivTurleriComponent,
                
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'demirbas-listesi',
                component: DemirbasListesiComponent,
            },
            {
                path: 'lokasyon-listesi',
                component: LokasyonListesiComponent,
                
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'yayinlar',
                component: YayinlarComponent,
            },
            {
                path: 'yayin-türleri',
                component: YayinTurleriComponent,
                
            },
            {
                path: 'kutuphane-listesi',
                component: KutuphaneListesiComponent,
            },
            {
                path: 'odunc-yayinlari-listesi',
                component: OduncYayinlarListesiComponent,
                
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'dosya-kayit',
                component: DosyaKayitComponent,
            },
            {
                path: 'mevzuat',
                component: MevzuatComponent,
                
            },
            {
                path: 'dilekceler',
                component: DilekcelerComponent,
            },
            {
                path: 'hesaplama-araclari',
                component: HesaplamaAraclariComponent,
                
            },
            {
                path: 'standart-faizler',
                component: StandartFaizlerComponent,
                
            },
            {
                path: 'fatura-islemleri',
                component: FaturaIslemleriComponent,
                
            },
            {
                path: 'kullanici-tercihleri',
                component: KullaniciTercihleriComponent,
                
            },
        ],
    },
    {
        path: '',        
        component: AdminLayoutComponent,
        children: [
            {
                path: 'iletisim-bilgileri',
                component: IletisimBilgileriComponent,
            },
            {
                path: 'sıkca-sorulan-sorular',
                component:SikcaSorulanSorularComponent,
                
            },
            {
                path: 'talepler',
                component: TaleplerComponent,
            },
            {
                path: 'kullanim-kilavuzlari',
                component: KullanimKilavuzlariComponent,
                
            },
            {
                path: 'yardim-videolari',
                component: YardimVideolariComponent,
                
            },
        ],
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes),RouterModule],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
