import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

const appRoutes: Routes = [
    {path: 'login', component:LoginComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);