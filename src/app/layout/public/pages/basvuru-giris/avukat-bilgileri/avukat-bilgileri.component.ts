import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avukat-bilgileri',
  templateUrl: './avukat-bilgileri.component.html',
  styleUrls: ['./avukat-bilgileri.component.scss'],
})
export class AvukatBilgileriComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    tc: new FormControl(''),
    tel: new FormControl(''),
  });
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    this.router.navigate(['/bilgi/uyekayitform/odeme_adimi']);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tc: ['', [Validators.required, Validators.minLength(11)]],
      tel: ['', [Validators.required, Validators.minLength(11)]],
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
