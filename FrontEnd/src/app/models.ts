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
