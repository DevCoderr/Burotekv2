import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Calendar } from '@fullcalendar/core';

@Component({
  selector: 'app-evrak-islemleri',
  templateUrl: './evrak-islemleri.component.html',
  styleUrls: ['./evrak-islemleri.component.scss']
})
export class EvrakIslemleriComponent {
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

}
