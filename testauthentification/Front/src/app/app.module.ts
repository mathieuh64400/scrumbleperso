import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { SigninComponent } from './component/user/signin/signin.component';
import { AccueilComponent} from './component/accueil/accueil.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import { NavbarComponent } from './component/Menu/navbar/navbar.component';
import { FooterComponent } from './component/Menu/footer/footer.component';
import { NavbaroldComponent } from './component/Menu/navbarold/navbarold.component';
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

// import { RoleComponent } from './component/role/role.component';
// import { RolecreateComponent } from './component/rolecreate/rolecreate.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AccueilComponent, 
    NavbarComponent, 
    FooterComponent,
     NavbaroldComponent, 
     IndexComponent, 
     CreateComponent, PbcarteIndexComponent, PbcarteCreateComponent, PbcarteEditComponent, ChoixComponent, Userstories1Component, Userstories1createComponent, Userstories1editComponent, RevueCarteIndexComponent, RevueCarteCreateComponent, RevueCarteEditComponent, ReglesIndexComponent, ReglesCreateComponent, ReglesEditComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
