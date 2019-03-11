import{Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ExComponent} from './ex/ex.component';


export const ROUTES: Routes = [
   {path:'', component : HomeComponent},
   {path:'about', component : AboutComponent},
   {path:'ex', component : ExComponent}
       

];