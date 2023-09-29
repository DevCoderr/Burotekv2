import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { DataService } from 'src/data.service';
@Component({
    selector: 'app-kullanici-islemleri',
    templateUrl: './kullanici-islemleri.component.html',
    styleUrls: ['./kullanici-islemleri.component.scss'],
    
})
export class KullaniciIslemleriComponent implements OnInit{
    formGroup: FormGroup | undefined;
    userList: any[];

    ngOnInit() {
        debugger;
        this.formGroup = new FormGroup({
            pasif: new FormControl<boolean | null>(null),
        });

        this.userService.get("api/Users").subscribe(
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



    selectedValues: string[] = [];
    constructor(private router: Router, private userService: DataService) {}
    isMenuOpen: boolean = false;

    
    gotoPage(route: string) {
        var url = 'main/' + route;
        console.log(url);
        this.router.navigate(['main/' + route]);
    }
    allowNumericDigitsOnlyOnKeyUp(e) {		
      const charCode = e.which ? e.which : e.keyCode;
      
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
      }
    }

  
}
