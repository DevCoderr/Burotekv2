import { Component } from '@angular/core';

@Component({
  selector: 'app-dava-listesi',
  templateUrl: './dava-listesi.component.html',
  styleUrls: ['./dava-listesi.component.scss']
})
export class DavaListesiComponent {

  date1 : Date;

  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
  selectedValues: string[] = [];
  selectedCities: string[] = [];
}
