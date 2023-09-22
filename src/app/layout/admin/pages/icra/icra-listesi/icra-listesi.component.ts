import { Component } from '@angular/core';

@Component({
  selector: 'app-icra-listesi',
  templateUrl: './icra-listesi.component.html',
  styleUrls: ['./icra-listesi.component.scss']
})
export class IcraListesiComponent {
  date : Date ;

  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
  selectedValues: string[] = [];
  selectedCities: string[] = [];
}
