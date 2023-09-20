import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-yapilacak-isler-listesi',
  templateUrl: './yapilacak-isler-listesi.component.html',
  styleUrls: ['./yapilacak-isler-listesi.component.scss']
})
export class YapilacakIslerListesiComponent {
    [x: string]: any;
    constructor(private router: Router) {}
    isMenuOpen: boolean = false; 

  
    products: any[] = [
      {
        Id:1,
        name: 'Adem ÇİÇEK',
        TcNo:"	36996324269	",
        barosicilno:"234",
        kullanicitipi:"Admin",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        yasaltemsilci:"Veli",
        tuzelkisiadi:"dendene"
      },
      {
        Id:2,
        name: 'Büşra Çakmak',
        TcNo:"	36996324269	",
        barosicilno:"234",
        kullanicitipi:"Buro Yöneticisi",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000"
      },
      {
        Id:3,
        name: 'çağlar mercan',
        TcNo:"	36996324269	",
        barosicilno:"",
        kullanicitipi:"Admin",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        yasaltemsilci:"Veli",
        tuzelkisiadi:"dendene"
        
  
      },
      {
        Id:4,
        name: 'EBRU KAYKAÇ',
        TcNo:"	36996324269	",
        barosicilno:"",
        kullanicitipi:"Buro Yöneticisi",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        tuzelkisiadi:"dendene"
  
      },
      {
        Id:5,
        name: 'Emre Uzan',
        TcNo:"	36996324269	",
        barosicilno:"",
        kullanicitipi:"Sekreterya",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        yasaltemsilci:"Veli",
        tuzelkisiadi:"dendene" 
  
      },
      {
        Id:6,
        name: '	ERKAN GÜZGÜLÜ',
        TcNo:"	36996324269	",
        barosicilno:"6546",
        kullanicitipi:"Admin",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        tuzelkisiadi:"dendene"
  
      },
      {
        Id:7,
        name: 'fahriye erova',
        TcNo:"	36996324269	",
        barosicilno:"",
        kullanicitipi:"Buro Yöneticisi",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000"
  
      },
      {
        Id:8,
        name: '	fazil say',
        TcNo:"	36996324269	",
        barosicilno:"43",
        kullanicitipi:"Sekreterya",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        yasaltemsilci:"Veli"
      },
      {
        Id:9,
        name: '	Feride YILMAZ',
        TcNo:"	36996324269	",
        barosicilno:"",
        kullanicitipi:"Admin",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000"
      },
      {
        Id:10,
        name: '	FUAT TIRTAR',
        TcNo:"	36996324269	",
        barosicilno:"7878",
        kullanicitipi:"Buro Yöneticisi",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        yasaltemsilci:"Veli",
        tuzelkisiadi:"dendene"
      },
      {
        Id:11,
        name: '	Halim ATAK',
        TcNo:"	36996324269	",
        barosicilno:"",
        kullanicitipi:"Buro Yöneticisi",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000"
      },
      {
        Id:12,
        name: '	melis beyza',
        TcNo:"	36996324269	",
        barosicilno:"",
        kullanicitipi:"Sekreterya",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        yasaltemsilci:"Veli"
      },
      {
        Id:13,
        name: '	Merve Merve',
        TcNo:"	36996324269	",
        barosicilno:"",
        kullanicitipi:"Buro Yöneticisi",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        yasaltemsilci:"Veli",
        tuzelkisiadi:"dendene"
      },
      {
        Id:14,
        name: 'Ürün 14',
        TcNo:"	36996324269	",
        barosicilno:"234",
        kullanicitipi:"Sekreterya",
        ceptelno:" 5064110998",
        kayittarihi:"28/10/2000",
        yasaltemsilci:"Veli",
        tuzelkisiadi:"dendene"
      },
    
  
    ];
    gotoPage(route: string){
      var url = "main/"+route;
      console.log(url);
      this.router.navigate(['main/'+route]);
    }
}
