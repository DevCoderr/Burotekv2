import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from 'src/app/core/services/app.layout.service';


@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model =
        [

            {

                items: [
                    { label: 'Ana Sayfa', icon: 'pi pi-fw pi-home', routerLink: ['/admin/anasayfa']  }
                ]
            },
            {

                items: [
                    { label: 'Yönetim Paneli', icon: 'pi pi-fw pi-id-card'  ,
                    items:[
                        {
                            label: 'Kullanıcı İşlemleri', 
                            routerLink: ['kullanici-islemleri']
                        },
                        {
                            label: 'Büro Bilgilerim',
                            routerLink: ['buro-islemleri']
                        }

                    ]},
                ]
            },

                {
                    items: [
                    { label: 'Kişi İşlemleri', icon: 'pi pi-fw pi-user',
                    items:[
                        {
                            label: 'Müvekkiller',
                            routerLink: ['muvekkiller']
                        },
                        {
                            label: 'Karşı Taraf',
                            routerLink: ['karsi-taraf']
                        },
                        {
                            label: 'Diğer Kişiler',
                            routerLink: ['diger-kisiler']
                        },
                        {
                            label: 'Kişi Listesi',
                            routerLink: ['kisi-listesi']
                        }
                    ]},
                ]
            },
                {
                    items: [
                        { label: 'Notlar', icon: 'pi pi-calendar-minus',
                        items:[
                            {
                                label: 'Not Listesi',
                                routerLink: ['not-listesi']
                            },
                            {
                                label: 'Yapılacak İşler Listesi',
                                routerLink: ['yapilacak-isler-listesi']
                            }
                        ]},
                    ]
                },
                {
                    items: [
                    { label: 'Evrak', icon: 'pi pi-fw pi-file',
                    items:[
                        {
                            label: 'Yeni Evrak',
                            routerLink: ['yeni-evrak']
                        },
                        {
                            label: 'Evrak İşlemleri',
                            routerLink: ['evrak-islemleri']
                        },
                        {
                            label: 'Kurum İşlemleri',
                            routerLink: ['kurum-islemleri']
                        },
                    ]},
                ]
            },
            {
                items: [
                    { label: 'Danışma', icon: 'pi pi-fw pi-users',
                    items:[
                        {
                            label: 'Yeni Danışma',
                            routerLink: ['yeni-danisma']
                        },
                        {
                            label: 'Danışma Listesi',
                            routerLink: ['danisma-listesi']
                        }
                    ]},
                ]
            },
            {
                items: [
                { label: 'Dava', icon: 'pi pi-fw pi-shield',
                items:[
                    {
                        label: 'Yeni Dava',
                        routerLink: ['yeni-dava']
                    },
                    {
                        label: 'Dava Listesi',
                        routerLink: ['dava-listesi']
                    },
                    {
                        label: 'Kurum İşlemleri',
                        routerLink: ['kurum-islemleri']
                    },
                    {
                        label: 'Duruşma Listesi',
                        routerLink: ['durusma-listesi']
                    }
                ]},
            ]
        },
        {
            items: [
            { label: 'İcra', icon: 'pi pi-fw pi-slack',
            items:[
                {
                    label: 'Yeni İcra',
                    routerLink: ['yeni-icra']
                },
                {
                    label: 'İcra Listesi',
                    routerLink: ['icra-listesi']
                },
                {
                    label: 'İcra Dairesi İşlemleri',
                    routerLink: ['icra-dairesi-islemleri']
                }
            ]},
        ]
    },
    {
        items: [
        { label: 'Cari İşlemler', icon: 'pi pi-fw pi-money-bill',
        items:[
            {
                label: 'Yeni Ödeme',
                routerLink: ['yeni-odeme']
            },
            {
                label: 'Yeni Tahsilat',
                routerLink: ['yeni-tahsilat']
            },
            {
                label: 'Cari İşlem Geçmişi',
                routerLink: ['cari-islem-gecmisi']
            },
            {
                label: 'Cariler',
                routerLink: ['cariler']
            },
            {
                label: 'Cari Hesap İşlem Adları',
                routerLink: ['cari-hesap-islem-adlari']
            }
        ]},
    ]
},
{
    items: [
        { label: 'Arşiv', icon: 'pi pi-fw pi-inbox',
        items:[
            {
                label: 'Arşiv Listesi',
                routerLink: ['arsiv-listesi']
            },
            {
                label: 'Arşiv Türleri',
                routerLink: ['arsiv-türleri']
            }
        ]},
    ]
},

{
    items: [
        { label: 'Demirbas', icon: 'pi pi-fw pi-building',
        items:[
            {
                label: 'Demirbas Listesi',
                routerLink: ['demirbas-listesi']
            },
            {
                label: 'Lokasyon Listesi',
                routerLink: ['lokasyon-listesi']
            }
        ]},
    ]
},

{
    items: [
    { label: 'Kütüphane', icon: 'pi pi-fw pi-sitemap',
    items:[
        {
            label: 'Yayınlar',
            routerLink: ['yayinlar']
        },
        {
            label: 'Yayın Türleri',
            routerLink: ['yayin-türleri']
        },
        {
            label: 'Kütüphane Listesi',
            routerLink: ['kutuphane-listesi']
        },
        {
            label: 'Ödünç Yayınları Listesi',
            routerLink: ['odunc-yayinlari-listesi']
        }
    ]},
]
},
{
    items: [
    { label: 'Araçlar', icon: 'pi pi-fw pi-pencil',
    items:[
        {
            label: 'Dosya Kayıt',
            routerLink: ['dosya-kayit']
        },
        {
            label: 'Mevzuat',
            routerLink: ['mevzuat']
        },
        {
            label: 'Dilekçeler',
            routerLink: ['dilekceler']
        },
        {
            label: 'Hesaplama Araçları',
            routerLink: ['hesaplama-araclari']
        },
        {
            label: 'Standart Faizler',
            routerLink: ['standart-faizler']
        },
        {
            label: 'Fatura İşlemleri',
            routerLink: ['fatura-islemleri']
        },
        {
            label: 'Kullanıcı Tercihleri',
            routerLink: ['kullanici-tercihleri']
        }
    ]},
]
},

{
    items: [
    { label: 'İletişim', icon: 'pi pi-fw pi-phone',
    items:[
        {
            label: 'İletişim Bilgileri',
            routerLink: ['iletisim-bilgileri']
        },
        {
            label: 'Sıkça Sorulan Sorular',
            routerLink: ['sıkca-sorulan-sorular']
        },
        {
            label: 'Talepler',
            routerLink: ['talepler']
        },
        {
            label: 'Kullanım Klavuzları',
            routerLink: ['kullanim-kilavuzlari']
        },
        {
            label: 'Yardım Videoları',
            routerLink: ['yardim-videolari']
        }
    ]},
]
},

        ]
    }
}

