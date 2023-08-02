import {Drink} from "./IDrink.interface";
import {UserDrinkStatus} from "../enum/UserDrinkStatus";


export interface UserDrink {
  id?: number,
  userId: number,
  drink: Drink,
  eventId?: number,
  review: string,
  rating: number | null,
  dateOfDegustation: Date | null;
  status: UserDrinkStatus;
}
