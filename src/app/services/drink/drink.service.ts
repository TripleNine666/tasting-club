import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drink} from "../../shared/interfaces/IDrink.interface";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  private drinkUrl = 'api/drinks';

  getProducts(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.drinkUrl)
  }

}
