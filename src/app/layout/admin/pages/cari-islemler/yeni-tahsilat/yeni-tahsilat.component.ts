import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-yeni-tahsilat',
  templateUrl: './yeni-tahsilat.component.html',
  styleUrls: ['./yeni-tahsilat.component.scss']
})
export class YeniTahsilatComponent {
  formGroup: FormGroup | undefined;

  ngOnInit() {
      this.formGroup = new FormGroup({
          city: new FormControl<string | null>(null)
      });
}
}
