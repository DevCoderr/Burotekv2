import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-yeni-evrak',
  templateUrl: './yeni-evrak.component.html',
  styleUrls: ['./yeni-evrak.component.scss']
})
export class YeniEvrakComponent {
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
