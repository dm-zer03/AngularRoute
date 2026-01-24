import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contactus } from './contactus/contactus';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';


export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'login',component:Login},
    {path:'contactus',component:Contactus},
    {path:'profile',component:Profile},
    {path:'**',component:PageNotFound},
];
