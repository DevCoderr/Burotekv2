import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { DataService } from 'src/data.service';


@Component({
  selector: 'app-yapilacak-isler-listesi',
  templateUrl: './yapilacak-isler-listesi.component.html',
  styleUrls: ['./yapilacak-isler-listesi.component.scss']
})
export class YapilacakIslerListesiComponent implements OnInit{
  formGroup: FormGroup | undefined;
  userList: any[];

  date : Date

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
    [x: string]: any;
    constructor(private router: Router,private userService:DataService) {}
    isMenuOpen: boolean = false; 


    gotoPage(route: string){
      var url = "main/"+route;
      console.log(url);
      this.router.navigate(['main/'+route]);
    }
}
