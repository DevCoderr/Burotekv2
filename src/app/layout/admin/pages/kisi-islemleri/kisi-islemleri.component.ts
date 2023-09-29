import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-kisi-islemleri',
  templateUrl: './kisi-islemleri.component.html',
  styleUrls: ['./kisi-islemleri.component.scss']
})
export class KisiIslemleriComponent {
  userService: any;

  ngOnInit() {
    debugger;
    this.formGroup = new FormGroup({
        pasif: new FormControl<boolean | null>(null),
    });

    this.userService.get("kisiIslemleri").subscribe(
        (data) => {
          console.log(data);
          this.userList = data;
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

  @Input() tip: string = "";
  userList: any[];
  formGroup: FormGroup | undefined;
    constructor(private router: Router , userService : DataService) {

    }

    

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

    test(): any {
      console.log("test")
    }
    onReset(): void {
      console.log(this.tip);
      this['submitted'] = false;
      this['form'].reset();
    }
  
    gotoPage(route: string){
      var url = "main/"+route;
      console.log(url);
      this.router.navigate(['main/'+route]);
    }
}
