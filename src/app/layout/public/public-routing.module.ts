import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/sifremi-unuttum/login/login.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { HakkimizdaComponent } from './pages/hakkimizda/hakkimizda.component';
import { BasvuruGirisComponent } from './pages/basvuru-giris/basvuru-giris.component';
import { BuroBilgileriComponent } from './pages/basvuru-giris/buro-bilgileri/buro-bilgileri.component';
import { OdemeBilgileriComponent } from './pages/basvuru-giris/odeme-bilgileri/odeme-bilgileri.component';
import { AvukatBilgileriComponent } from './pages/basvuru-giris/avukat-bilgileri/avukat-bilgileri.component';
import { SifremiUnuttumComponent } from './pages/sifremi-unuttum/sifremi-unuttum.component';
import { AnasayfaComponent } from '../admin/pages/anasayfa/anasayfa.component';

const routes: Routes = [

    {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
    },
    {
        path:'',
        component:PublicLayoutComponent,
        children:[
            {
                path:'login',
                component:LoginComponent,
               
            },
            {
                path:'sifremi-unuttum',
                component:SifremiUnuttumComponent,
            },

            {
                path:'hakkimizda',
                component:HakkimizdaComponent,
            },
            {
                path:'basvuru-giris',
                component:BasvuruGirisComponent,
                children:[

                    {
                        path:'buro-adimi',
                        component:BuroBilgileriComponent,
                    },
                    {
                        path:'odeme-adimi',
                        component:OdemeBilgileriComponent,
                    },
                    {
                        path:'avukat-bilgileri',
                        component:AvukatBilgileriComponent,

                    }
                ]
            }
        ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
