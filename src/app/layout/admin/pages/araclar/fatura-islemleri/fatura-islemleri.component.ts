import { Component } from '@angular/core';

@Component({
  selector: 'app-fatura-islemleri',
  templateUrl: './fatura-islemleri.component.html',
  styleUrls: ['./fatura-islemleri.component.scss']
})
export class FaturaIslemleriComponent {
 products : any [] = []
 date1 : Date | undefined ;
}
