import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent}]
    },

    {
        path: 'signin', component: UserComponent,
        children: [{ path: '', component: SignInComponent}]
    },
    {
        path: 'welcome', component: WelcomeComponent,
        children: [{ path: '', component: WelcomeComponent}]
    },
    
    {
        path: '', redirectTo: '/signin', pathMatch: 'full'
    }
];