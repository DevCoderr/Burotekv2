import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-odeme-bilgileri',
  templateUrl: './odeme-bilgileri.component.html',
  styleUrls: ['./odeme-bilgileri.component.css'],
})
export class OdemeBilgileriComponent implements OnInit {
  submitted = false;
  form: FormGroup = new FormGroup({
    sahip: new FormControl(''),
    tel: new FormControl(''),
    cardNo: new FormControl(''),
    ccv: new FormControl(''),
    sonKullanma: new FormControl(''),
  });
  constructor(private fb: FormBuilder) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    //this.router.navigate(['/bilgi/uyekayitform/odeme_adimi']);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      sahip: ['', Validators.required],

      cardNo: ['', [Validators.required, Validators.minLength(16)]],

      tel: ['', [Validators.required, Validators.minLength(11)]],
      ccv: ['', [Validators.required, Validators.minLength(3)]],

      sonKullanma: ['', [Validators.required, Validators.minLength(7)]],

      // password: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(6),
      //     Validators.maxLength(40),
      //   ],
      // ],
      // confirmPassword: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue],
    });
  }
  // Only Integer Numbers
  keyPressNumbers(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    // Only Numbers 0-9
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
