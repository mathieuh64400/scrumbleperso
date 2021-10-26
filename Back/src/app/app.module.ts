import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { NavbarComponent } from './component/Menu/navbar/navbar.component';
import { FooterComponent } from './component/Menu/footer/footer.component';
import { DaylicarteComponent } from './component/daylicarte/daylicarte.component';
import { CreateDaylicarteComponent } from './component/create-daylicarte/create-daylicarte.component';
import { RoleComponent } from './component/role/role.component';
import { ReglesComponent } from './component/regles/regles.component';
import { CarteRevueComponent } from './component/carte-revue/carte-revue.component';
import { CartePbComponent } from './component/carte-pb/carte-pb.component';
import { UserstoriesComponent } from './component/userstories/userstories.component';
import { ReglescreateComponent } from './component/reglescreate/reglescreate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AccueilComponent,
    NavbarComponent,
    FooterComponent,
    DaylicarteComponent,
    CreateDaylicarteComponent,
    RoleComponent,
    ReglesComponent,
    CarteRevueComponent,
    CartePbComponent,
    UserstoriesComponent,
    ReglescreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
