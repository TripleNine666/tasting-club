import {Component, Input} from '@angular/core';
import {Drink} from "../../shared/interfaces/IDrink.interface";

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.css']
})
export class DrinkItemComponent {
  @Input() drink?: Drink
}
