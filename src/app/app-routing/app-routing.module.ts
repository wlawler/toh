import { NgModule}  from '@angular/core'; 
import { RouterModule, Routes, Router} from '@angular/router'; 
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '.dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent},
];

@NgModule({
  imports:[ RouterModule.forRoot(routes)  ],
  exports:[ RouterModule]
 
})

export class AppRoutingModule { }
