export interface SuitableProduct {
  id: number,
  title: string
}

export interface DrinkType {
  id: number,
  title: string,
}

export interface ProducingCountry {
  id: number,
  name: string,
}

export interface DrinkBrand {
  id: number,
  name: string,
}

export interface DrinkProducer {
  id: number,
  name: string,
}

export interface Drink {
  id: number,
  drinkType: DrinkType,
  name: string,
  brand: DrinkBrand,
  producer: DrinkProducer,
  alcoPrecentage: number,
  producingCountry: ProducingCountry,
  color: string,
  taste: string,
  aroma: string,
  gastronomy: string,
  drinkPhotos: string[],
  suitableProducts: SuitableProduct[]
}
