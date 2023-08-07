import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap, throwError} from "rxjs";
import {Drink} from "../../shared/interfaces/IDrink.interface";
import {UserDrink} from "../../shared/interfaces/IUserDrink.interface";
import {UserDrinkStatus} from "../../shared/enum/UserDrinkStatus";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  private userDrinksSubject = new BehaviorSubject<UserDrink[]>([]);
  userDrinks$: Observable<UserDrink[]> = this.userDrinksSubject.asObservable()

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

  updateUserDrink(userDrink: UserDrink): Observable<UserDrink> {
    return this.http.put<UserDrink>(`${this.userDrinkUrl}/${userDrink.id}`, userDrink)
  }

  createUserDrink(userDrink: UserDrink): Observable<UserDrink> {
    return this.http.post<UserDrink>(`${this.userDrinkUrl}`, userDrink)
  }

  addToUserDrinks(drink: Drink) {
    // get userDrinks list
    let userDrinks: UserDrink[] = [];
    this.userDrinks$.subscribe(drinks => {
      userDrinks = drinks;
    })

    // check if drink is already exists
    const userDrink = userDrinks.find((ud) => ud.drink.id === drink.id);
    if (userDrink) {
      return throwError(new Error('Drink already exists in userDrinks'));
    }

    // Create new userDrink
    const newUserDrink: UserDrink = {
      userId: 1, // get userId from user
      drink,
      review: '',
      rating: null,
      dateOfDegustation: null,
      status: UserDrinkStatus.PENDING,
    };

    // Request to the server
    return this.createUserDrink(newUserDrink).pipe(
      tap((userDrink) => {
        console.log(userDrink);
        this.addUserDrink(userDrink); // Add new drink to UserDrinkService
      })
    );
  }

  setUserDrinks(userDrinks: UserDrink[]) {
    this.userDrinksSubject.next(userDrinks);
  }

  addUserDrink(userDrink: UserDrink) {
    const userDrinks = this.userDrinksSubject.getValue();
    this.userDrinksSubject.next([...userDrinks, userDrink]);
  }

}
