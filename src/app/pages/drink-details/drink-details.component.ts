import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DrinkService} from "../../services/drink/drink.service";
import {Drink} from "../../shared/interfaces/IDrink.interface";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css']
})
export class DrinkDetailsComponent implements OnInit{

  drink?: Drink;

  constructor(private route: ActivatedRoute, private drinkService: DrinkService) {
  }

  ngOnInit() {
    this.getDrink();
  }

  getDrink() {
    const drinkId = Number(this.route.snapshot.paramMap.get('id'));
    this.drinkService.getDrink(drinkId).subscribe(drink => {
      this.drink = drink;
      console.log(this.drink)
    })
  }

  addToMyDrinks() {
    if (this.drink){
      this.drinkService.addToUserDrinks(this.drink).pipe(
        catchError((error) => {
          // Handle the error here
          console.log(error.message);
          // Show a dialog or redirect the user
          return of(null);
        })
      ).subscribe();
    }
  }
}
