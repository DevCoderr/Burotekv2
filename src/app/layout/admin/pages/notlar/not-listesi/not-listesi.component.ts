import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-not-listesi',
  templateUrl: './not-listesi.component.html',
  styleUrls: ['./not-listesi.component.scss']
})
export class NotListesiComponent {
   notList: any[];
  [x: string]: any;
  constructor(private router: Router, private dataService: DataService) {}
  isMenuOpen: boolean = false; 

  ngOnInit() {
    console.log("hi")
    this.dataService.get("Not").subscribe(
      (data) => {
        console.log(data);
        this.notList = data;
        // Verileri işleme kodu buraya yazın
      },
      (error) => {
        // Hata yönetimi buraya yazın
      }
    );
  }

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
    

  ];
  gotoPage(route: string){
    var url = "main/"+route;
    console.log(url);
    this.router.navigate(['main/'+route]);
  }
}
