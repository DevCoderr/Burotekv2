import { RouterModule } from '@angular/router';
import {  NgModule } from '@angular/core';

import { AppLayoutComponent } from "./layout/app.layout.component";
import { NotfoundComponent } from './demo/components/notfound/notfound.component';

@NgModule({
    imports: [

        RouterModule.forRoot([
            {
                path:'',
                pathMatch:'full',
                redirectTo:'login'
            },
            { path:'',loadChildren:()=>import('./layout/public/public.module').then(m=>m.PublicModule)  },
            {
                path:'demo-contents',
                component:AppLayoutComponent,
                children:[

                    { path: 'dashboards', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
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
