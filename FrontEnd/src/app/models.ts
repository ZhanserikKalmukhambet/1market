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
  id: number;
  name: string;
  rating: number;
  address: string;
  seller: authUser;
}



export interface authUser{
  username: string;
  password: string;
}

export interface nonAuthUser{
  firstName: string;
  lastName: string;
  username: string;
  password: string;

}

export interface AuthToken {
  token: string;
}
export interface Category {
  name : string;
  subCategories : SubCategory[];
}
export interface Person {
  username : string;
  password : string;
}
export interface SubCategory {
  name: string;
}
export interface Product {
  id: string;
  name : string;
  main_image : string;
  is_active : boolean;
  price : number;
  description : string;
  count : number;
  rating : number;
  category : string;
  subCategory : string;
}


