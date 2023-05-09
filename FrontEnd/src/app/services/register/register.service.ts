import { Injectable } from '@angular/core';
import {AuthToken, nonAuthUser, Shop} from '../../models';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BASE_URL = 'http://localhost:8000'

  constructor(private client: HttpClient) {

  }

  register( first_name: string,
            last_name: string,
            username: string,
            email: string,
            user_type: string,
            phone_number: string,
            password: string): Observable<nonAuthUser> {
    return this.client.post<nonAuthUser>(`${this.BASE_URL}/api/register/`, {
      first_name,
      last_name,
      username,
      email,
      user_type,
      phone_number,
      password
    })
  }

  createShop(name: string, address: string, seller: number): Observable<Shop> {
    return this.client.post<Shop>(`${this.BASE_URL}/api/shops/`,
      {name, address, seller}
    )
  }

  // sendCodeToEmail(email: string) {
  //   return this.client.post<any>(`${this.BASE_URL}/api/register/verify/`, email
  //   )
  // }
}
