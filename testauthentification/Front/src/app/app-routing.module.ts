import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { SigninComponent } from './component/user/signin/signin.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { UserComponent } from './component/user/user.component';
import {AuthGuard} from './auth/auth.guard';
import { IndexComponent } from './component/daylicarte/index/index.component';
import { CreateComponent } from './component/daylicarte/create/create.component';
import { PbcarteIndexComponent } from './component/Pbcarte/pbcarte-index/pbcarte-index.component';
import { PbcarteCreateComponent } from './component/Pbcarte/pbcarte-create/pbcarte-create.component';
import { PbcarteEditComponent } from './component/Pbcarte/pbcarte-edit/pbcarte-edit.component';
const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'accueil',component:AccueilComponent,canActivate:[AuthGuard]},
  {path:'daylicarte',component:IndexComponent},
  {path:'daylicartecreate',component:CreateComponent},
  {path:'pbcarte',component:PbcarteIndexComponent},
  {path:'pbcartecreate',component:PbcarteCreateComponent},
  {path:'pbcarte/:_id/edit',component:PbcarteEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
