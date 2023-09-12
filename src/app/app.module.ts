import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { SharedModule } from './layout/shared/modules/shared.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        NgbModule,
        
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
