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
}
export interface Product {
  name : string;
  main_image : string;
  is_active : boolean;
  price : number;
  description : string;
  count : number;
  rating : number;
  category : Category;
}
