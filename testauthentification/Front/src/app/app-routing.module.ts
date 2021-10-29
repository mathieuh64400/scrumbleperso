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
import { ChoixComponent } from './component/Userstories/choix/choix.component';
import { Userstories1Component } from './component/Userstories/userstories1/userstories1.component';
import { Userstories1createComponent } from './component/Userstories/userstories1create/userstories1create.component';
import { Userstories1editComponent } from './component/Userstories/userstories1edit/userstories1edit.component';
import { RevueCarteIndexComponent } from './component/RevueCarte/revue-carte-index/revue-carte-index.component';
import { RevueCarteCreateComponent } from './component/RevueCarte/revue-carte-create/revue-carte-create.component';
import { RevueCarteEditComponent } from './component/RevueCarte/revue-carte-edit/revue-carte-edit.component';
import { ReglesIndexComponent } from './component/Regles/regles-index/regles-index.component';
import { ReglesCreateComponent } from './component/Regles/regles-create/regles-create.component';
import { ReglesEditComponent } from './component/Regles/regles-edit/regles-edit.component';
import { RoleComponent } from './component/Role/role/role.component';
import { RoleeditComponent } from './component/Role/roleedit/roleedit.component';
import { EditComponent } from './component/daylicarte/edit/edit.component';
const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'accueil',component:AccueilComponent,canActivate:[AuthGuard]},
  {path:'daylicarte',component:IndexComponent},
  {path:'daylicarte/:_id/edit',component:EditComponent},
  {path:'daylicartecreate',component:CreateComponent},
  {path:'pbcarte',component:PbcarteIndexComponent},
  {path:'pbcartecreate',component:PbcarteCreateComponent},
  {path:'pbcarte/:_id/edit',component:PbcarteEditComponent},
  {path:'revuecarte',component:RevueCarteIndexComponent},
  {path:'revuecartecreate',component:RevueCarteCreateComponent},
  {path:'revuecarte/:_id/edit',component:RevueCarteEditComponent},
  {path:'regles',component:ReglesIndexComponent},
  {path:'reglecreate',component:ReglesCreateComponent},
  {path:'regles/:_id/edit',component:ReglesEditComponent},
  {path:'role',component:RoleComponent},
  {path:'role/:_id/edit',component:RoleeditComponent},
  {path:'choix',component:ChoixComponent},
  {path:'userstories1gestion',component:Userstories1Component},
  {path:'userstories1create',component:Userstories1createComponent},
  {path:'userstories1gestion/:id/edit',component:Userstories1editComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
