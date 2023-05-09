import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { HeaderButtonsComponent } from './components/header-buttons/header-buttons.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './pages/login-page/login-page.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AuthInterceptor} from "./AuthInterceptor";
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { CategoriesNavComponent } from './components/categories-nav/categories-nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriesSliderComponent } from './components/categories-slider/categories-slider.component';
import { HomePageFooterComponent } from './components/home-page-footer/home-page-footer.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ProductListInCategoryDetailComponent } from './components/product-list-in-category-detail/product-list-in-category-detail.component';
import { ItemCartComponent } from './pages/item-cart/item-cart.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ItemInBasketComponent } from './components/item-in-basket/item-in-basket.component';
import { SubCategoryDetailComponent } from './pages/sub-category-detail/sub-category-detail.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { ItemInMyOrdersComponent } from './components/item-in-my-orders/item-in-my-orders.component';
import { ItemInSellerProductsComponent } from './components/item-in-seller-products/item-in-seller-products.component';
import { SellerProductsComponent } from './pages/seller-products/seller-products.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MySoldProductsComponent } from './pages/my-sold-products/my-sold-products.component';
import { AllCategoryComponent } from './pages/all-category/all-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderButtonsComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    CategoriesNavComponent,
    HomePageComponent,
    CategoriesSliderComponent,
    HomePageFooterComponent,
    CategoryDetailComponent,
    ItemDetailComponent,
    ProductListInCategoryDetailComponent,
    ItemCartComponent,
    HeaderMenuComponent,
    BasketComponent,
    ItemInBasketComponent,
    SubCategoryDetailComponent,
    MyOrdersComponent,
    ItemInMyOrdersComponent,
    ItemInSellerProductsComponent,
    SellerProductsComponent,
    MySoldProductsComponent,
    AllCategoryComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule,
    NgbModule,
    HttpClientModule,
    JwtModule
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
