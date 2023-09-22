import { Component } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'app-yeni-dava',
  templateUrl: './yeni-dava.component.html',
  styleUrls: ['./yeni-dava.component.scss']
})
export class YeniDavaComponent {

  date1 : Date;
  date2 : Date;
  date3 : Date;
  date4 : Date;

  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
  selectedValues: string[] = [];
  selectedCities: string[] = [];

}
