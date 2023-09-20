import { RouterModule } from '@angular/router';
import {  NgModule } from '@angular/core';

import { AppLayoutComponent } from "./layout/app.layout.component";
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { KullaniciIslemleriComponent } from './layout/admin/pages/yonetim-paneli/kullanici-islemleri/kullanici-islemleri.component';

@NgModule({
    imports: [

        RouterModule.forRoot([
            {   
                path:'',
                pathMatch:'full',
                redirectTo:'login'
            },
            { path:'',loadChildren:()=>import('./layout/public/public.module').then(m=>m.PublicModule)  },
            {path:'admin', loadChildren: () => import('./layout/admin/AdminModule').then(m => m.AdminModule) },
            {
                path:'buroTek',
                component:AppLayoutComponent,
                children:[
                    
                    // { path: 'anasayfa', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'basvuru-giris/buro-adimi', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]

        },

             { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
             { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },

        ])


        // RouterModule.forRoot([
        //     {
        //         path: '', component: AppLayoutComponent,
        //         children: [
        //
        //         ]
        //     },
        //
        // ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
