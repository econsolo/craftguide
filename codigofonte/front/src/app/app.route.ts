import { Routes, RouterModule } from '@angular/router';
import { InternoComponent } from './interno/interno.component';
import { MODULE_ROUTES_INTERNO } from './interno/interno.import';
import { ExternoComponent } from './externo/externo.component';
import { MODULE_ROUTES_EXTERNO } from './externo/externo.import';

const APP_ROUTES: Routes = [
    {
        path: 'app', component: InternoComponent,
        children: MODULE_ROUTES_INTERNO
    },
    {
        path: '', component: ExternoComponent,
        children: MODULE_ROUTES_EXTERNO
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'app' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
