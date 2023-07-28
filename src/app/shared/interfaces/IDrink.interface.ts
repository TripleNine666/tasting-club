export interface SuitableProduct {
  id: number,
  suitableProduct: string
}

export interface DrinkType {
  id: number,
  title: string,
}

export interface ProducingCountry {
  id: number,
  title: string,
}

export interface Drink {
  id: number,
  drinkType: DrinkType,
  name: string,
  volume: number,
  alcoPrecentage: number,
  producingCountry: ProducingCountry,
  color: string,
  taste: string,
  aroma: string,
  gastronomy: string,
  drinkPhoto: string[],
  suitableProducts: SuitableProduct[]
}
