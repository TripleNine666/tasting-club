import {Component, OnInit} from '@angular/core';
import {DrinkService} from "../../services/drink/drink.service";
import {Drink} from "../../shared/interfaces/IDrink.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit{

  constructor(private drinkService: DrinkService) { }

  drinks?: Drink[];
  sortCriteria = 'name';

  ngOnInit() {
    this.drinkService.getDrinks().subscribe(drinks => {
      this.drinks = drinks;
      console.log(drinks)
    })
  }

  updateSorting(value: any): void {
    this.sortCriteria = value[0];
    console.log(this.sortCriteria)
  }
}
