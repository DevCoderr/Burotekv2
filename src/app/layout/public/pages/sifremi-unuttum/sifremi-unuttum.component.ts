import { Component } from '@angular/core';
import { LayoutService } from 'src/app/core/services/app.layout.service';

@Component({
  selector: 'app-sifremi-unuttum',
  templateUrl: './sifremi-unuttum.component.html',
  styleUrls: ['./sifremi-unuttum.component.scss']
})
export class SifremiUnuttumComponent {

  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
password: any;
constructor(public layoutService: LayoutService) { }
}
