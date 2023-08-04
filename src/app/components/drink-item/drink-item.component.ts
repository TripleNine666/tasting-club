import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Drink} from "../../shared/interfaces/IDrink.interface";
import {UserDrinkStatus} from "../../shared/enum/UserDrinkStatus";
import {NbDialogService} from "@nebular/theme";
import {DialogDrinkReviewComponent} from "../dialog-drink-review/dialog-drink-review.component";
import {DrinkService} from "../../services/drink/drink.service";
import {UserDrink} from "../../shared/interfaces/IUserDrink.interface";

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.css']
})
export class DrinkItemComponent {

  constructor(private dialogService: NbDialogService, private drinkService: DrinkService) {
  }
  @Input() id?: number;
  @Input() userId?: number;
  @Input() drink?: Drink;
  @Input() status?: UserDrinkStatus;
  @Input() review?: string;
  @Input() ratingFromUser?: number | null;
  @Input() degustationDate?: Date | null;

  @Output() addToMyDrinks = new EventEmitter<Drink>();


  userDrinkStatus = UserDrinkStatus;

  getColorByStatus(status: UserDrinkStatus): string {
    return status === UserDrinkStatus.DEGUSTATED ? 'success': 'warning'
  }

  openDialog() {
    this.dialogService.open(DialogDrinkReviewComponent, {
      context: {
        drinkName: this.drink!.name,
        degustationDate: this.degustationDate,
        ratingFromUser: this.ratingFromUser,
        review: this.review
      } as Partial<DialogDrinkReviewComponent>,
    }).onClose.subscribe((result) => {
      if(result) {
        this.degustationDate = result.degustationDate;
        this.ratingFromUser = result.ratingFromUser;
        this.review = result.review;
        this.status = UserDrinkStatus.DEGUSTATED;
        const userDrink = {
          id: this.id,
          userId: this.userId,
          drink: this.drink,
          review: result.review,
          rating: result.ratingFromUser,
          dateOfDegustation: result.degustationDate,
          status: UserDrinkStatus.DEGUSTATED,
        }
        this.drinkService.updateUserDrink(userDrink as UserDrink).subscribe();
      }
    });
  }

  onAddToMyDrinksButton() {
    this.addToMyDrinks.emit(this.drink);
  }

  onRate($event:{newValue:number}) {
    this.ratingFromUser = $event.newValue;
  }
}
