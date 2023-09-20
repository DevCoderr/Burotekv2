import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent {
  constructor(private router: Router) {}
  isMenuOpen: boolean = false; 



  gotoPage(route: string){
    var url = "main/"+route;
    console.log(url);
    this.router.navigate(['main/'+route]);
  }
}
