import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drink} from "../../shared/interfaces/IDrink.interface";
import {UserDrink} from "../../shared/interfaces/IUserDrink.interface";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  private drinkUrl = 'api/drinks';
  private userDrinkUrl = 'api/userDrinks'

  getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.drinkUrl)
  }

  getDrink(id: number): Observable<Drink> {
    const url =`${this.drinkUrl}/${id}`;
    return this.http.get<Drink>(url);
  }

  getUserDrinks(userId: number): Observable<UserDrink[]> {
    return this.http.get<UserDrink[]>(`${this.userDrinkUrl}?userId=${userId}`);
  }

}
