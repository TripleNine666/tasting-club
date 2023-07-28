import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Drink} from "./shared/interfaces/IDrink.interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const drinks: Drink[] = [
      {
        id: 1,
        drinkType: {
          id: 1,
          title: 'Whiskey'
        },
        name: 'Black Ram',
        alcoPrecentage: 40,
        producingCountry: {
          id: 1,
          title: 'Bulgaria'
        },
        volume: 1,
        color: 'Whiskey light golden color.',
        taste: 'Whisky has a sophisticated, delicate, rounded taste with perfect balance, hints of vanilla, red apples and milk chocolate. A long, warm finish gives a bouquet of perfection.',
        aroma: 'Whisky has a delicate, elegant aroma of heather honey with a hint of spice.',
        gastronomy: 'Whiskey is a great digestif, is drunk as well in pure form, and water is fine in cocktails.',
        drinkPhoto: ['https://s2.wine.style/images_gen/201/201229/0_0_prod_desktop.jpg'],
        suitableProducts: [{
          id: 1,
          suitableProduct: 'ice',
        },
        ]
      },
    ]
    return { drinks }
  }

}
