import { Component } from '@angular/core';

@Component({
  selector: 'app-yeni-icra',
  templateUrl: './yeni-icra.component.html',
  styleUrls: ['./yeni-icra.component.scss']
})
export class YeniIcraComponent {

  date1 : Date ;
  date2: Date ;
  date3 : Date ;

  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
  selectedValues: string[] = [];
  selectedCities: string[] = [];
}
