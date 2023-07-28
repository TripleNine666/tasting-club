import {Component, OnInit} from '@angular/core';
import {DrinkService} from "../../services/drink/drink.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private drinkService: DrinkService) {
  }

  ngOnInit() {
    this.drinkService.getProducts().subscribe(drinks => {
      console.log(drinks)
    })
  }
}
