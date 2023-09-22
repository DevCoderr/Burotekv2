import { Component } from '@angular/core';
import { LayoutService } from 'src/app/core/services/app.layout.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})


export class LoginComponent {

    allowNumericDigitsOnlyOnKeyUp(e) {		
        const charCode = e.which ? e.which : e.keyCode;
        
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          e.preventDefault();
        }
      }
  

    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService) {
        
     }


    
}
