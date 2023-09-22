import { Component } from '@angular/core';

@Component({
  selector: 'app-cari-hesap-islem-adlari',
  templateUrl: './cari-hesap-islem-adlari.component.html',
  styleUrls: ['./cari-hesap-islem-adlari.component.scss']
})
export class CariHesapIslemAdlariComponent {

  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
  products: any[] = [
  
  ]
}
