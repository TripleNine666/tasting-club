import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Drink} from "./shared/interfaces/IDrink.interface";
import {UserDrink} from "./shared/interfaces/IUserDrink.interface";
import {UserDrinkStatus} from "./shared/enum/UserDrinkStatus";
import {UserGroup} from "./shared/interfaces/IUserGroup.interface";

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
        price: 20,
        rating: 9.5,
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
        drinkPhotos: {
          smallPhoto: "https://s2.wine.style/images_gen/201/201229/0_0_cat.jpg",
          mainPhoto: "https://s2.wine.style/images_gen/201/201229/0_0_prod_desktop.jpg",
          additionalPhotos: [],
        },
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
        price: 25,
        rating: 8.6,
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
        drinkPhotos: {
          smallPhoto: "https://s2.wine.style/images_gen/196/196695/0_0_cat.jpg",
          mainPhoto: 'https://s2.wine.style/images_gen/196/196695/0_0_prod_desktop.jpg',
          additionalPhotos: []
        },
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
      {
        id: 3,
        drinkType: {
          id: 2,
          title: 'Wine '
        },
        name: 'Alvarez y Diez, "Silga" Verdejo, Rueda DO, 2022',
        price: 10.5,
        rating: 6.8,
        alcoPrecentage: 13,
        producingCountry: {
          id: 4,
          name: 'Spain'
        },
        brand: {
          id: 1,
          name: "Silga",
        },
        producer: {
          id: 1,
          name: " Alvarez y Diez"
        },
        color: 'Wine dense, deep color with black reflections and brilliant purple hue on the edge.',
        taste: 'The wine has a strong, balanced and harmonious taste with a smooth texture. Aftertaste - a long, spicy and refreshing, with a hint of liquorice.',
        aroma: 'The rich aroma of the wine reveals notes of ripe fruit, candied cherry, plum and mocha.',
        gastronomy: 'Wine will be combined with red meat, cold cuts and delicacies, seasoned cheeses.',
        drinkPhotos: {
          smallPhoto: 'https://s2.wine.style/images_gen/211/211726/0_0_cat.jpg',
          mainPhoto: "https://s2.wine.style/images_gen/211/211726/0_0_prod_desktop.jpg",
          additionalPhotos: []
        },
        suitableProducts: [{
          id: 2,
          title: 'cigar',
        },
          {
            id: 3,
            title: "cocktails"
          }
        ]
      }
    ];

    const userDrinks: UserDrink[] = [
      {
        id: 1,
        userId: 1,
        review: '',
        rating: null,
        status: UserDrinkStatus.PENDING,
        dateOfDegustation: null,
        drink: {
          id: 1,
          drinkType: {
            id: 1,
            title: 'Whiskey'
          },
          name: '"Black Ram" Bourbon Finish 3 Years Old',
          price: 20,
          rating: 9.5,
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
          drinkPhotos: {
            smallPhoto: "https://s2.wine.style/images_gen/201/201229/0_0_cat.jpg",
            mainPhoto: "https://s2.wine.style/images_gen/201/201229/0_0_prod_desktop.jpg",
            additionalPhotos: [],
          },
          suitableProducts: [{
            id: 1,
            title: 'ice',
          },
          ]
        },
      }
    ];
    const userGroups: UserGroup[] = [
      {
        "id": 1,
        "title": "Wine Lovers",
        "description": "We love Wine",
        "accessType": "public",
        "photos": [
          "https://luding.ru/upload/resize_cache/iblock/3ec/740_740_1/0oasri3m4ujeuj1wyfm9lrxcw56ayxhr.jpg"
        ]
      },
      {
        "id": 2,
        "title": "Whiskey Lovers",
        "description": "We love Whiskey",
        "accessType": "private",
        "photos": [
          "https://www.ladogaspb.ru/upload/iblock/5ec/5ec07d49f19b2887f44fdf019426be86.jpg"
        ]
      },
      {
        "id": 3,
        "title": "Champagne Lovers",
        "description": "We love Champagne",
        "accessType": "closed",
        "photos": [
          "https://pbs.twimg.com/media/DzK7lTvW0AAhfdN.jpg"
        ]
      }
    ]
    return { drinks, userDrinks, userGroups }
  }

  genId(userData: UserDrink[] | UserGroup[]): number {
    return userData.length > 0 ? Math.max(...userData.map((ud) => ud.id ?? 0)) + 1 : 1;
  }



}
