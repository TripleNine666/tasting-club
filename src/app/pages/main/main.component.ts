import {Component, OnInit} from '@angular/core';
import {DrinkService} from "../../services/drink/drink.service";
import {Drink} from "../../shared/interfaces/IDrink.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private drinkService: DrinkService) { }

  drinks?: Drink[];

  ngOnInit() {
    this.drinkService.getProducts().subscribe(drinks => {
      this.drinks = drinks;
      console.log(drinks)
    })
  }
}
