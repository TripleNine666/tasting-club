import {Component, OnInit, OnDestroy} from '@angular/core';
import {DrinkService} from "../../services/drink/drink.service";
import {Drink} from "../../shared/interfaces/IDrink.interface";
import {AuthService} from "../../services/auth/auth.service";
import {Subscription} from "rxjs";
import {UserDrink} from "../../shared/interfaces/IUserDrink.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy{

  constructor(private drinkService: DrinkService, private authService: AuthService) { }

  isAuthenticated: boolean = false;

  drinks?: Drink[]; // All Drinks
  userDrinks?: UserDrink[] // User Drinks
  sortCriteria = 'name';

  obs?: Subscription; //variable to store the subscription


  ngOnInit() {
    this.obs = this.authService.isAuthenticated$.subscribe(auth => {
      this.isAuthenticated = auth; // get the service value
      console.log(this.isAuthenticated)
    });
    this.getDrinks();
    this.getUserDrinks();
  }

  getUserDrinks() {
    // get user drinks if user exists
    // check if auth
    if (!this.isAuthenticated) {
      return;
    }
    // get userId
    const userId = 1;
    // get user drinks by userId
    this.drinkService.getUserDrinks(userId).subscribe(userDrunks => {
      this.userDrinks = userDrunks;
    })
  }

  ngOnDestroy() {
    this.obs?.unsubscribe(); // unsubscribe from the subscription
  }

  getDrinks() {
    this.drinkService.getDrinks().subscribe(drinks => {
      this.drinks = drinks;
    })
  }

  updateSorting(value: any): void {
    this.sortCriteria = value[0];
    console.log(this.sortCriteria)
  }
}
