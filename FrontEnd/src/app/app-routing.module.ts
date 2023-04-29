import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CategoriesSliderComponent} from "./components/categories-slider/categories-slider.component";
import {CategoryDetailComponent} from "./pages/category-detail/category-detail.component";
import {ItemCartComponent} from "./pages/item-cart/item-cart.component";
import {BasketComponent} from "./pages/basket/basket.component";
import {SubCategoryDetailComponent} from "./pages/sub-category-detail/sub-category-detail.component";
import {MyOrdersComponent} from "./pages/my-orders/my-orders.component";
import {SellerProductsComponent} from "./pages/seller-products/seller-products.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'shop', component: HomePageComponent},
  {path: 'categories/1', component: CategoryDetailComponent},
  {path: 'categories/subcategories/1/1', component: ItemCartComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'categories/:id', component: CategoryDetailComponent},
  {path: 'categories/1/products/1', component: ItemCartComponent},
  {path: 'categories/1/subcategories/1', component: SubCategoryDetailComponent},
  {path: 'myOrders', component: MyOrdersComponent},
  {path: 'myProducts', component: SellerProductsComponent},
  {path: '', redirectTo: 'shop', pathMatch: 'full'}
  // {path: 'slider', component: CategoriesSliderComponent},
  // lrfh

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
