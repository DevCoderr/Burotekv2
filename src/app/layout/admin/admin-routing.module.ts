import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { KullaniciIslemleriComponent } from './pages/yonetim-paneli/kullanici-islemleri/kullanici-islemleri.component';
import { MuvekkillerComponent } from './pages/kisi-islemleri/muvekkiller/muvekkiller.component';
import { KarsiTarafComponent } from './pages/kisi-islemleri/karsi-taraf/karsi-taraf.component';
import { DigerKisilerComponent } from './pages/kisi-islemleri/diger-kisiler/diger-kisiler.component';
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
import { CarilerComponent } from './pages/cari-islemler/cariler/cariler.component';;
import { CariIslemGecmisiComponent } from './pages/cari-islemler/cari-islem-gecmisi/cari-islem-gecmisi.component';
import { YeniTahsilatComponent } from './pages/cari-islemler/yeni-tahsilat/yeni-tahsilat.component';
import { YeniOdemeComponent } from './pages/cari-islemler/yeni-odeme/yeni-odeme.component';
import { ArsivListesiComponent } from './pages/arsiv/arsiv-listesi/arsiv-listesi.component';
import { ArsivTurleriComponent } from './pages/arsiv/arsiv-turleri/arsiv-turleri.component';
import { DemirbasListesiComponent } from './pages/demirbas/demirbas-listesi/demirbas-listesi.component';
import { LokasyonListesiComponent } from './pages/demirbas/lokasyon-listesi/lokasyon-listesi.component';
import { OduncYayinlarListesiComponent } from './pages/kutuphane/odunc-yayinlar-listesi/odunc-yayinlar-listesi.component';
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
import { BelgeTuruIslemleriComponent } from './pages/evrak/belge-turu-islemleri/belge-turu-islemleri.component';


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
                data:{
                    title:'Ana Sayfa',
                    breadcrumb: "Ana Sayfa",
                },
            },
            {
                path: 'kullanici-islemleri',
                component: KullaniciIslemleriComponent,
                data:{
                    title:'Kullanıcı İşlemleri',
                    breadcrumb:'Kullanıcı İşlemleri',
                    link:'admin/kullanici-islemleri' 
                },
            },
            {
                path: 'buro-islemleri',
                component: BuroIslemleriComponent,
                data:{
                    title:'Büro İşlemleri',
                    breadcrumb:'Büro İşlemleri',
                    link:'admin/buro-islemleri' 
                },
            },
            {
                path: 'muvekkiller',
                component: MuvekkillerComponent,
                data:{
                    title:'Müvekkiller',
                    breadcrumb:'Müvekkiller',
                    link:'admin/muvekkiller' 
                },
            },
            {
                path: 'karsi-taraf',
                component: KarsiTarafComponent,
                data:{
                    title:'Karşı Taraf',
                    breadcrumb:'Karşı Taraf',
                    link:'admin/karsi-taraf' 
                },
            },
            {
                path: 'diger-kisiler',
                component: DigerKisilerComponent,
                data:{
                    title:'Diğer Kişiler',
                    breadcrumb:'Diğer Kişiler',
                    link:'admin/diger-kisiler' 
                }
            },
            {
                path: 'kisi-listesi',
                component: KisiListesiComponent,
                data:{
                    title:'Kişi Listesi',
                    breadcrumb:'Kişi Listesi',
                    link:'admin/kisi-listesi' 
                }
            },

            {
                path: 'not-listesi',
                component: NotListesiComponent,
                data:{
                    title:'Not Listesi',
                    breadcrumb:'Not Listesi',
                    link:'admin/not-listesi' 
                }
            },
            {
                path: 'yapilacak-isler-listesi',
                component: YapilacakIslerListesiComponent,
                data:{
                    title:'Yapılacak İşler Listesi',
                    breadcrumb:'Yapılacak İşler Listesi',
                    link:'admin/yapilacak-isler-listesi' 
                }
            },
            {
                path: 'yeni-evrak',
                component: YeniEvrakComponent,
                data:{
                    title:'Yeni Evrak',
                    breadcrumb:'Yeni Evrak',
                    link:'admin/yeni-evrak' 
                }
            },
            {
                path: 'evrak-islemleri',
                component: EvrakIslemleriComponent,
                data:{
                    title:'Evrak İşlemleri',
                    breadcrumb:'Evrak İşlemleri',
                    link:'admin/evrak-islemleri' 
                }
            },
            {
                 path: 'belge-turu-islemleri',
                 component: BelgeTuruIslemleriComponent ,
                 data:{
                     title:'Belge Türü İşlemleri',
                     breadcrumb:'Belge Türü İşlemleri',
                     link:'admin/belge-turu-islemleri' 
                }
            },
            {
                path: 'yeni-danisma',
                component: YeniDanismaComponent,
                data:{
                    title:'Yeni Danışma',
                    breadcrumb:'Yeni Danışma',
                    link:'admin/yeni-danisma' 
                }
            },
            {
                path: 'danisma-listesi',
                component: DanismaListesiComponent,
                data:{
                    title:'Danışma Listesi',
                    breadcrumb:'Danışma Listesi',
                    link:'admin/danisma-listesi' 
                }
                
            },
            {
                path: 'yeni-dava',
                component: YeniDavaComponent,
                data:{
                    title:'Yeni Dava',
                    breadcrumb:'Yeni Dava',
                    link:'admin/yeni-dava' 
                }
            },
            {
                path: 'dava-listesi',
                component: DavaListesiComponent,
                data:{
                    title:'Dava Listesi',
                    breadcrumb:'Dava Listesi',
                    link:'admin/dava-listesi' 
                }
                
            },
            {
                path: 'kurum-islemleri',
                component: KurumIslemleriComponent,
                data:{
                    title:'Kurum İşlemleri',
                    breadcrumb:'Kurum İşlemleri',
                    link:'admin/kurum-islemleri' 
                }
            },
            {
                path: 'durusma-listesi',
                component: DurusmaListesiComponent,
                data:{
                    title:'Duruşma Listesi',
                    breadcrumb:'Duruşma Listesi',
                    link:'admin/durusma-listesi' 
                }
                
            },
            {
                path: 'yeni-icra',
                component: YeniIcraComponent,
                data:{
                    title:'Yeni İcra',
                    breadcrumb:'Yeni İcra',
                    link:'admin/yeni-icra' 
                }
            },
            {
                path: 'icra-listesi',
                component: IcraListesiComponent,
                data:{
                    title:'İcra Listesi',
                    breadcrumb:'İcra Listesi',
                    link:'admin/icra-listesi' 
                }
                
            },
            {
                path: 'icra-dairesi-islemleri',
                component: IcraDaireIslemleriComponent,
                data:{
                    title:'İcra Dairesi İşlemleri',
                    breadcrumb:'İcra Dairesi İşlemleri',
                    link:'admin/icra-dairesi-islemleri' 
                }
            },
{
                path: 'yeni-odeme',
                component: YeniOdemeComponent,
                data:{
                    title:'Yeni Ödeme',
                    breadcrumb:'Yeni Ödeme',
                    link:'admin/yeni-odeme' 
                }
            },
            {
                path: 'yeni-tahsilat',
                component: YeniTahsilatComponent,
                data:{
                    title:'Yeni Tahsilat',
                    breadcrumb:'Yeni Tahsilat',
                    link:'admin/yeni-tahsilat' 
                }
                
            },
             {
                path: 'cari-islem-gecmisi',
                component: CariIslemGecmisiComponent,
                data:{
                    title:'Cari İşlem Geçmişi',
                    breadcrumb:'Cari İşlem Geçmişi',
                    link:'admin/cari-islem-gecmisi' 
                }
            },
            {
                path: 'cariler',
                component: CarilerComponent,data:{
                    title:'Cariler',
                    breadcrumb:'Cariler',
                    link:'admin/cariler' 
                }

                
            },
            {
                path: 'cari-hesap-islem-adlari',
                component: CariHesapIslemAdlariComponent,data:{
                    title:'Cari Hesap İşlem Adları',
                    breadcrumb:'Kişi Listesi',
                    link:'admin/cari-hesap-islem-adlari' 
                }

                
            },
 {
                path: 'arsiv-listesi',
                component: ArsivListesiComponent,
                data:{
                    title:'Arşiv Listesi',
                    breadcrumb:'Arşiv Listesi',
                    link:'admin/arsiv-listesi' 
                }
            },
            {
                path: 'arsiv-türleri',
                component: ArsivTurleriComponent,
                data:{
                    title:'Arşiv Türleri',
                    breadcrumb:'Arşiv Türleri',
                    link:'admin/arsiv-türleri' 
                }
            },
{
                path: 'demirbas-listesi',
                component: DemirbasListesiComponent,
                data:{
                    title:'Demirbaş Listesi',
                    breadcrumb:'Demirbaş Listesi',
                    link:'admin/demirbas-listesi' 
                }
            },
            {
                path: 'lokasyon-listesi',
                component: LokasyonListesiComponent,
                data:{
                    title:'Lokasyon Listesi',
                    breadcrumb:'Lokasyon Listesi',
                    link:'admin/lokasyon-listesi' 
                }
            },
{
                path: 'yayinlar',
                component: YayinlarComponent,
                data:{
                    title:'Yayınlar',
                    breadcrumb:'Yayınlar',
                    link:'admin/yayinlar' 
                }
            },
            {
                path: 'yayin-türleri',
                component: YayinTurleriComponent,
                data:{
                    title:'Yayın Türleri',
                    breadcrumb:'Yayın Türleri',
                    link:'admin/yayin-türleri'
                }
            },
            {
                path: 'kutuphane-listesi',
                component: KutuphaneListesiComponent,
                data:{
                    title:'Kütüphane Listesi',
                    breadcrumb:'Kütüphane Listesi',
                    link:'admin/kutuphane-listesi' 
                }
            },
            {
                path: 'odunc-yayinlari-listesi',
                component: OduncYayinlarListesiComponent,
                data:{
                    title:'Ödünç Yayınları Listesi',
                    breadcrumb:'Ödünç Yayınları Listesi',
                    link:'admin/odunc-yayinlari-listesi' 
                }
            },
            {
                path: 'dosya-kayit',
                component: DosyaKayitComponent,
                data:{
                    title:'Dosya Kayıt',
                    breadcrumb:'Dosya Kayıt',
                    link:'admin/dosya-kayit' 
                }
            },
            {
                path: 'mevzuat',
                component: MevzuatComponent,
                data:{
                    title:'Mevzuat',
                    breadcrumb:'Mevzuat',
                    link:'admin/mevzuat' 
                }
            },
            {
                path: 'dilekceler',
                component: DilekcelerComponent,
                data:{
                    title:'Dilekçeler',
                    breadcrumb:'Dilekçeler',
                    link:'admin/dilekceler'
                }
            },
            {
                path: 'hesaplama-araclari',
                component: HesaplamaAraclariComponent,
                data:{
                    title:'Hesaplama Araçları',
                    breadcrumb:'Hesaplama Araçları',
                    link:'admin/hesaplama-araclari' 
                }
            },
            {
                path: 'standart-faizler',
                component: StandartFaizlerComponent,
                data:{
                    title:'Standart Faizler',
                    breadcrumb:'Standart Faizler',
                    link:'admin/standart-faizler' 
                }
            },
            {
                path: 'fatura-islemleri',
                component: FaturaIslemleriComponent,
                data:{
                    title:'Fatura İşlemleri',
                    breadcrumb:'Fatura İşlemleri',
                    link:'admin/fatura-islemleri' 
                }
            },
            {
                path: 'kullanici-tercihleri',
                component: KullaniciTercihleriComponent,
                data:{
                    title:'Kullanıcı Tercihleri',
                    breadcrumb:'Kullanıcı Tercihleri',
                    link:'admin/kullanici-tercihleri' 
                }
            },
 {
                path: 'iletisim-bilgileri',
                component: IletisimBilgileriComponent,
                data:{
                    title:'İletişim Bilgileri',
                    breadcrumb:'İletişim Bilgileri',
                    link:'admin/iletisim-bilgileri' 
                }
            },
            {
                path: 'sıkca-sorulan-sorular',
                component:SikcaSorulanSorularComponent,
                data:{
                    title:'Sıkça Sorulan Sorular',
                    breadcrumb:'Sıkça Sorulan Sorular',
                    link:'admin/sıkca-sorulan-sorular' 
                }
            },
            {
                path: 'talepler',
                component: TaleplerComponent,
                data:{
                    title:'Talepler',
                    breadcrumb:'Talepler',
                    link:'admin/talepler' 
                }
            },
            {
                path: 'kullanim-kilavuzlari',
                component: KullanimKilavuzlariComponent,
                data:{
                    title:'Kullanım Klavuzu',
                    breadcrumb:'Kullanım Klavuzu',
                    link:'admin/kullanim-kilavuzlari'
                }
            },
            {
                path: 'yardim-videolari',
                component: YardimVideolariComponent,
                data:{
                    title:'Yardım Videoları',
                    breadcrumb:'Yardım Videoları',
                    link:'admin/yardim-videolari' 
                }
            },
        ],
    },

    



];

@NgModule({
    imports: [RouterModule.forChild(routes),RouterModule],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
