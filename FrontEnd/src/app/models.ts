export interface Order {
  id: number;
  user: authUser;
  completed: boolean;
  deliveryDate: Date;
  deliveryAddress: string;
  deliveryPrice: number;
}


export interface OrderItem {
  id: number;
  order: Order;
  warehouseItem: WarehouseItem;
  quantity: number;
}

export interface WarehouseItem {
  id: number;
  product: Product;
  shop: Shop;
  quantity: number;
  price: number;
}


export interface Shop {
  name: string;
  address: string;
  rating: number;
  sellerID: number;
}

export interface authUser{
  username: string;
  password: string;
}

export interface nonAuthUser{
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

}

export interface Image {
  link: string;
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
