import { Component } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'app-yeni-danisma',
  templateUrl: './yeni-danisma.component.html',
  styleUrls: ['./yeni-danisma.component.scss']
})
export class YeniDanismaComponent {
  selectedValues: string[] = [];
}
