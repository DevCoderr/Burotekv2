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
                    { label: 'Ana Sayfa', icon: 'pi pi-fw pi-home', routerLink: ['/giris-sayfasi'] }
                ]
            },
            {

                items: [
                    { label: 'Yönetim Paneli', icon: 'pi pi-fw pi-id-card' ,
                    items:[
                        {
                            label: 'Kullanıcı İşlemleri',
                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'Büro Bilgilerim',
                            routerLink: ['/auth/error']
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
                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'Karşı Taraf',
                            routerLink: ['/auth/error']
                        },
                        {
                            label: 'Diğer Kişiler',
                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'Kişi Listesi',
                            routerLink: ['/auth/error']
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
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Yapılacak İşler Listesi',
                                routerLink: ['/auth/error']
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
                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'Evrak İşlemleri',
                            routerLink: ['/auth/error']
                        },
                        {
                            label: 'Kurum İşlemleri',
                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'Belge Türü İşlemleri',
                            routerLink: ['/auth/error']
                        }
                    ]},
                ]
            },
            {
                items: [
                    { label: 'Danışma', icon: 'pi pi-fw pi-users',
                    items:[
                        {
                            label: 'Yeni Danışma',
                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'Danışma Listesi',
                            routerLink: ['/auth/error']
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
                        routerLink: ['/auth/login']
                    },
                    {
                        label: 'Dava Listesi',
                        routerLink: ['/auth/error']
                    },
                    {
                        label: 'Kurum İşlemleri',
                        routerLink: ['/auth/login']
                    },
                    {
                        label: 'Duruşma Listesi',
                        routerLink: ['/auth/error']
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
                    routerLink: ['/auth/login']
                },
                {
                    label: 'İcra Listesi',
                    routerLink: ['/auth/error']
                },
                {
                    label: 'İcra Dairesi İşlemleri',
                    routerLink: ['/auth/login']
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
                routerLink: ['/auth/login']
            },
            {
                label: 'Yeni Tahsilat',
                routerLink: ['/auth/error']
            },
            {
                label: 'Cari İşlem Geçmişi',
                routerLink: ['/auth/login']
            },
            {
                label: 'Cariler',
                routerLink: ['/auth/error']
            },
            {
                label: 'Cari Hesap İşlem Adları',
                routerLink: ['/auth/error']
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
                routerLink: ['/auth/login']
            },
            {
                label: 'Arşiv Türleri',
                routerLink: ['/auth/error']
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
                routerLink: ['/auth/login']
            },
            {
                label: 'Lokasyon Listesi',
                routerLink: ['/auth/error']
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
            routerLink: ['/auth/login']
        },
        {
            label: 'Yayın Türleri',
            routerLink: ['/auth/error']
        },
        {
            label: 'Kütüphane Listesi',
            routerLink: ['/auth/login']
        },
        {
            label: 'Ödünç Yayınları Listesi',
            routerLink: ['/auth/error']
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
            routerLink: ['/auth/login']
        },
        {
            label: 'Mevzuat',
            routerLink: ['/auth/error']
        },
        {
            label: 'Dilekçeler',
            routerLink: ['/auth/login']
        },
        {
            label: 'Hesaplama Araçları',
            routerLink: ['/auth/error']
        },
        {
            label: 'Standart Faizler',
            routerLink: ['/auth/error']
        },
        {
            label: 'Fatura İşlemleri',
            routerLink: ['/auth/login']
        },
        {
            label: 'Kullanıcı Tercihleri',
            routerLink: ['/auth/error']
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
            routerLink: ['/auth/login']
        },
        {
            label: 'Sıkça Sorulan Sorular',
            routerLink: ['/auth/error']
        },
        {
            label: 'Talepler',
            routerLink: ['/auth/login']
        },
        {
            label: 'Kullanım Klavuzları',
            routerLink: ['/auth/error']
        },
        {
            label: 'Yardım Videoları',
            routerLink: ['/auth/error']
        }
    ]},
]
},

        ]
    }
}

