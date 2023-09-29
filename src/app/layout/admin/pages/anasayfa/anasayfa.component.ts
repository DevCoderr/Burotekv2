import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import trLocale from '@fullcalendar/core/locales/tr';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    locale: trLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true, 
    selectable: true,
    events: [ 
      {
        title: 'Örnek Etkinlik',
        start: '2023-09-27T10:00:00', // Start time with hours and minutes
        end: '2023-09-28T14:30:00'    // End time with hours and minutes
      },
      {
        title: 'Başka Bir Etkinlik',
        start: '2023-09-30T15:00:00',
        end: '2023-10-01T17:45:00'
      },
      {
        title: 'Can ın Doğum Günü',
        start: '2023-10-28T08:30:00',
        end: '2023-10-29T12:00:00'
      }
    ],
    dateClick: this.handleDateClick.bind(this) 
  };

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  handleDateClick(arg) {
    console.log(arg.dateStr);
  }

  gotoPage(route: string) {
    var url = "main/" + route;
    console.log(url);
    this.router.navigate(['main/' + route]);
  }
}
