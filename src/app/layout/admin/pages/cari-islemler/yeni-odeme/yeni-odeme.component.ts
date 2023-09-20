import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-yeni-odeme',
  templateUrl: './yeni-odeme.component.html',
  styleUrls: ['./yeni-odeme.component.scss']
})
export class YeniOdemeComponent {
  formGroup: FormGroup | undefined;

  ngOnInit() {
      this.formGroup = new FormGroup({
          city: new FormControl<string | null>(null)
      });
}
}
