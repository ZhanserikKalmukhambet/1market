import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { HeaderButtonsComponent } from './header-buttons/header-buttons.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './login-page/login-page.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AuthInterceptor} from "./AuthInterceptor";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { CategoriesNavComponent } from './categories-nav/categories-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoriesSliderComponent } from './categories-slider/categories-slider.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderButtonsComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    CategoriesNavComponent,
    HomePageComponent,
    CategoriesSliderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
