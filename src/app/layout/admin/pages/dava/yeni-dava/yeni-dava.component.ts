import { Component } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'app-yeni-dava',
  templateUrl: './yeni-dava.component.html',
  styleUrls: ['./yeni-dava.component.scss']
})
export class YeniDavaComponent {
  selectedValues: string[] = [];
}
