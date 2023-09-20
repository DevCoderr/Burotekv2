import { Component } from '@angular/core';

@Component({
  selector: 'app-standart-faizler',
  templateUrl: './standart-faizler.component.html',
  styleUrls: ['./standart-faizler.component.scss']
})
export class StandartFaizlerComponent {


  toggleTable(tableId) {
    var table = document.getElementById(tableId);
    if (table.style.display === "none") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }
}
 products : any [] = []
}
