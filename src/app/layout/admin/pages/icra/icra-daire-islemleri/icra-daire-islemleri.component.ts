import { Component } from '@angular/core';

@Component({
  selector: 'app-icra-daire-islemleri',
  templateUrl: './icra-daire-islemleri.component.html',
  styleUrls: ['./icra-daire-islemleri.component.scss']
})
export class IcraDaireIslemleriComponent {

  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
 icra: any[] = [
  {
    id:"1",
    name:"401 icra dairesi",
    iban : "TR62 0006 2298 1487 8778 5525 68",
  },
  {
    id:"2",
    name:"401 icra dairesi",
    iban : "TR62 0006 2298 1487 8778 5525 68",
  }
 ]
}
