import { Component } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'app-yeni-danisma',
  templateUrl: './yeni-danisma.component.html',
  styleUrls: ['./yeni-danisma.component.scss']
})
export class YeniDanismaComponent {
  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
  selectedValues: string[] = [];
}
