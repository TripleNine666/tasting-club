import {Drink} from "./IDrink.interface";

enum UserDrinkStatus {
  PENDING = 'pending',
  DEGUSTATED = 'degustated'
}

export interface UserDrink {
  id?: number,
  userId: number,
  drink: Drink,
  eventId?: number,
  review: string,
  rating: number,
  dateOfDegustation: Date;
  status: UserDrinkStatus;
}
