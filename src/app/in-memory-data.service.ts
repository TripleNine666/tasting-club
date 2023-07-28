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
        name: '"Black Ram" Bourbon Finish 3 Years Old',
        alcoPrecentage: 40,
        producingCountry: {
          id: 1,
          name: 'Bulgaria'
        },
        brand: {
          id: 1,
          name: "Black Ram",
        },
        producer: {
          id: 1,
          name: "VP Brands International"
        },
        color: 'Whiskey light golden color.',
        taste: 'Whisky has a sophisticated, delicate, rounded taste with perfect balance, hints of vanilla, red apples and milk chocolate. A long, warm finish gives a bouquet of perfection.',
        aroma: 'Whisky has a delicate, elegant aroma of heather honey with a hint of spice.',
        gastronomy: 'Whiskey is a great digestif, is drunk as well in pure form, and water is fine in cocktails.',
        drinkPhotos: ['https://s2.wine.style/images_gen/201/201229/0_0_prod_desktop.jpg'],
        suitableProducts: [{
          id: 1,
          title: 'ice',
        },
        ]
      },
      {
        id: 2,
        drinkType: {
          id: 1,
          title: 'Whiskey'
        },
        name: '"Nestville", gift box',
        alcoPrecentage: 40,
        producingCountry: {
          id: 1,
          name: 'Slovakia'
        },
        brand: {
          id: 1,
          name: "Nestville",
        },
        producer: {
          id: 1,
          name: "Nestville Distillery"
        },
        color: 'Whiskey seductive light golden color.',
        taste: 'The taste of whiskey is soft, well balanced, harmonious, pleasant, slightly sweet with pronounced malt, grain and vanilla tones. The finish is long with dry woody notes.',
        aroma: 'The gentle scent of whiskey envelops with sweet vanilla notes to accompany shades of caramel, ripe apples and burnt oak.',
        gastronomy: 'It is recommended that specialists consume whiskey as a digestif, as part of cocktails or paired with a cigar.',
        drinkPhotos: ['https://s2.wine.style/images_gen/196/196695/0_0_cat.jpg'],
        suitableProducts: [{
          id: 2,
          title: 'cigar',
        },
          {
            id: 3,
            title: "cocktails"
          }
        ]
      },
    ]
    return { drinks }
  }

}
