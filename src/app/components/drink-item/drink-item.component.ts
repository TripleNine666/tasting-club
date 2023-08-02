import {Component, Input} from '@angular/core';
import {Drink} from "../../shared/interfaces/IDrink.interface";
import {UserDrinkStatus} from "../../shared/enum/UserDrinkStatus";

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.css']
})
export class DrinkItemComponent {
  @Input() drink?: Drink
  @Input() status?: UserDrinkStatus;
  @Input() review?: string;
  @Input() ratingFromUser?: number | null;
  @Input() degustationDate?: Date | null;

}
