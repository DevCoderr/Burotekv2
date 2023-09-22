import { Component } from '@angular/core';


@Component({
  selector: 'app-cari-islem-gecmisi',
  templateUrl: './cari-islem-gecmisi.component.html',
  styleUrls: ['./cari-islem-gecmisi.component.scss']
})
export class CariIslemGecmisiComponent {

  date : Date ;
  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
}
