import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Calendar } from '@fullcalendar/core';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-evrak-islemleri',
  templateUrl: './evrak-islemleri.component.html',
  styleUrls: ['./evrak-islemleri.component.scss']
})
export class EvrakIslemleriComponent {
  
  formGroup: FormGroup | undefined;
  evrakList: any[]

  ngOnInit() {
      debugger;
      this.formGroup = new FormGroup({
          pasif: new FormControl<boolean | null>(null),
      });

this.evrakService.get("Evrak").subscribe(
          (data) => {
            console.log(data);
            this.evrakList = data;
            // Verileri işleme kodu buraya yazın
          },
          (error) => {
            // Hata yönetimi buraya yazın
          }
        );
  }


  allowNumericDigitsOnlyOnKeyUp(e) {		
    const charCode = e.which ? e.which : e.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }

  date1: Date | undefined;
  date2: Date | undefined;


  constructor(private router: Router, private evrakService: DataService) {}
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
