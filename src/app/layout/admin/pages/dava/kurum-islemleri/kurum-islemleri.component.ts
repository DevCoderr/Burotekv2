import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kurum-islemleri',
  templateUrl: './kurum-islemleri.component.html',
  styleUrls: ['./kurum-islemleri.component.scss']
})
export class KurumIslemleriComponent {
  [x: string]: any;
  constructor(private router: Router) {}
  isMenuOpen: boolean = false; 

  onSubmit(): void {

    //var buroKayit = new buroKayitModel();
    this['submitted'] = true;
    console.log(this['form']);
    if (this['form'].invalid) {
      return;
    }
    //localStorage.setItem('buroKayit', buroKayit.toString());
    this.router.navigate(['/bilgi/uyekayitform/avukat_adimi']);

    console.log(JSON.stringify(this['form'].value, null, 2));
  }

  onReset(): void {
    this['submitted'] = false;
    this['form'].reset();
  }

  products: any[] = [
    {
      Id:1,
      kurumadi: 'Adem ÇİÇEK',
      turu:"dendene"
    },
    {
      Id:2,
      kurumadi: 'Büşra Çakmak',
      turu:"Buro Yöneticisi",

    },
    {
      Id:3,
      kurumadi: 'çağlar mercan',
      turu:"dendene"
      

    },
    {
      Id:4,
      kurumadi: 'EBRU KAYKAÇ',
      turu:"dendene"

    },

  ]
}
