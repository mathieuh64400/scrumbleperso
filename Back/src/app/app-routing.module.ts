import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { DaylicarteComponent } from './component/daylicarte/daylicarte.component';
import { LoginComponent } from './component/login/login.component';
import { ReglesComponent } from './component/regles/regles.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'daylicarte',component:DaylicarteComponent},
  {path:'regles',component:ReglesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
