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
     CreateComponent, PbcarteIndexComponent, PbcarteCreateComponent, PbcarteEditComponent, 
 

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
