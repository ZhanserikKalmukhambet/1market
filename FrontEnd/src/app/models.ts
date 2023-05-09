import {Observable} from "rxjs";

export interface Order {
  id: number;
  user: number;
  completed: boolean;
  delivery_date: Date;
  delivery_address: string;
  delivery_price: number;
  order_items: OrderItem[];
}


export interface OrderItem {
  order_item_id: number;
  delivery_date: string;
  delivery_address :string;
  delivery_price: number;
  product_id: number;
  name: string;
  priceInThisShop: number
  shop_name: string
  quantity: number;
}


export interface WarehouseItem {
  id: number;
  product_id: number;
  shop_id: number;
  price: string;
  quantity: number;
  name: string;
}
export interface Shop {

  id: number;
  name: string;
  address: string;
  // rating: number;
  seller: number;
}

export interface authUser{
  username: string;
  password: string;
}

export interface nonAuthUser{
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  user_type: string;
  phone_number: string;
  password: string;

}

export interface AuthToken {
  access: string;
}

export interface MyJwtPayload {
  user_id: number;
  user_type: string
}

export interface Person {
  email : string;
  password : string;
}


export interface CategoryBack {
  id : number;
  name : string;
  image : string
}
export interface SubCategoryBack {
  id : number;
  name : string;
  category_id : number
}

export interface Product {
  id: number;
  name : string;
  main_image : string;
  is_active : boolean;
  description : string;
  rating : number;
  subCategory_id: number;
  price: number;
}


export interface Image {
  image: string;
}
export interface Price {
  price__avg: number;
}
export interface BasketItem {
  id : number;
  quantity : number;
  order_id : number;
  warehouse_id : number
}
export interface ItemInBusket {
  id : number;
  name : string;
  quantity : number;
  shop_name : string;
  priceInShop : number;
  mainImage : string;
}
export interface ProductInCategoryDetail {
  id: number;
  name : string;
  main_image : string;
  is_active : boolean;
  description : string;
  rating : number;
  subCategory_id: number;
  price : number;
}
