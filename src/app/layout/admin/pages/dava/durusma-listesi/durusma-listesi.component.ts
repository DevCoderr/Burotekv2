import { Component } from '@angular/core';

@Component({
  selector: 'app-durusma-listesi',
  templateUrl: './durusma-listesi.component.html',
  styleUrls: ['./durusma-listesi.component.scss']
})
export class DurusmaListesiComponent {

  date : Date ;

  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
  selectedValues: string[] = [];
  selectedCities: string[] = [];

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
  ]
}
