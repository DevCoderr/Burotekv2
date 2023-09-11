import { Component } from '@angular/core';
import { LayoutService } from 'src/app/core/services/app.layout.service';

@Component({
  selector: 'app-sifremi-unuttum',
  templateUrl: './sifremi-unuttum.component.html',
  styleUrls: ['./sifremi-unuttum.component.scss']
})
export class SifremiUnuttumComponent {
password: any;
constructor(public layoutService: LayoutService) { }
}
