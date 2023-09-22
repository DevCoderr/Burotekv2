import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from "./app.layout.component";
import { SharedModule } from './shared/modules/shared.module';
import { PublicModule } from './public/public.module';
import { PrimengModule } from './shared/modules/primeng.module';


@NgModule({
    declarations: [
        AppLayoutComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        SharedModule,
        PublicModule,
        PrimengModule,
        

    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
