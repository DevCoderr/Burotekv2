import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-notlar',
  templateUrl: './notlar.component.html',
  styleUrls: ['./notlar.component.scss']
})
export class NotlarComponent {

  constructor(private dataService: DataService){

  }

 
}
