import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
    selector: 'app-kullanici-islemleri',
    templateUrl: './kullanici-islemleri.component.html',
    styleUrls: ['./kullanici-islemleri.component.scss'],
})
export class KullaniciIslemleriComponent {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            city: new FormControl<string | null>(null),
        });
    }

   

    selectedValues: string[] = [];
    constructor(private router: Router) {}
    isMenuOpen: boolean = false;

    products: any[] = [
        {
            Id: 1,
            name: 'Adem ÇİÇEK',
            TcNo: '	36996324269	',
            barosicilno: '234',
            kullanicitipi: 'Admin',
            ceptelno: ' 5064110998',
            kayittarihi: '28/10/2000',
        },
        {
            Id: 2,
            name: 'Büşra Çakmak',
            TcNo: '	36996324269	',
            barosicilno: '234',
            kullanicitipi: 'Buro Yöneticisi',
            ceptelno: ' 5064110998',
        },
        {
            Id: 3,
            name: 'çağlar mercan',
            TcNo: '	36996324269	',
            barosicilno: '',
            kullanicitipi: 'Admin',
            ceptelno: ' 5064110998',
        },
        {
            Id: 4,
            name: 'EBRU KAYKAÇ',
            TcNo: '	36996324269	',
            barosicilno: '',
            kullanicitipi: 'Buro Yöneticisi',
            ceptelno: ' 5064110998',
        },
        {
            Id: 5,
            name: 'Emre Uzan',
            TcNo: '	36996324269	',
            barosicilno: '',
            kullanicitipi: 'Sekreterya',
            ceptelno: ' 5064110998',
        },
        {
            Id: 6,
            name: '	ERKAN GÜZGÜLÜ',
            TcNo: '	36996324269	',
            barosicilno: '6546',
            kullanicitipi: 'Admin',
            ceptelno: ' 5064110998',
        },
        {
            Id: 7,
            name: 'fahriye erova',
            TcNo: '	36996324269	',
            barosicilno: '',
            kullanicitipi: 'Buro Yöneticisi',
            ceptelno: ' 5064110998',
        },
        {
            Id: 8,
            name: '	fazil say',
            TcNo: '	36996324269	',
            barosicilno: '43',
            kullanicitipi: 'Sekreterya',
            ceptelno: ' 5064110998',
        },
        {
            Id: 9,
            name: '	Feride YILMAZ',
            TcNo: '	36996324269	',
            barosicilno: '',
            kullanicitipi: 'Admin',
            ceptelno: ' 5064110998',
        },
        {
            Id: 10,
            name: '	FUAT TIRTAR',
            TcNo: '	36996324269	',
            barosicilno: '7878',
            kullanicitipi: 'Buro Yöneticisi',
            ceptelno: ' 5064110998',
        },
        {
            Id: 11,
            name: '	Halim ATAK',
            TcNo: '	36996324269	',
            barosicilno: '',
            kullanicitipi: 'Buro Yöneticisi',
            ceptelno: ' 5064110998',
        },
        {
            Id: 12,
            name: '	melis beyza',
            TcNo: '	36996324269	',
            barosicilno: '',
            kullanicitipi: 'Sekreterya',
            ceptelno: ' 5064110998',
        },
        {
            Id: 13,
            name: '	Merve Merve',
            TcNo: '	36996324269	',
            barosicilno: '',
            kullanicitipi: 'Buro Yöneticisi',
            ceptelno: ' 5064110998',
        },
        {
            Id: 14,
            name: 'Ürün 14',
            TcNo: '	36996324269	',
            barosicilno: '234',
            kullanicitipi: 'Sekreterya',
            ceptelno: ' 5064110998',
        },
    ];
    gotoPage(route: string) {
        var url = 'main/' + route;
        console.log(url);
        this.router.navigate(['main/' + route]);
    }
    allowNumericDigitsOnlyOnKeyUp(e) {		
      const charCode = e.which ? e.which : e.keyCode;
      
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
      }
    }

  
}
