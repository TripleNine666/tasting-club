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

export interface DrinkPhotos {
  smallPhoto: string,
  mainPhoto: string,
  additionalPhotos: string[]
}

export interface Drink {
  id: number,
  drinkType: DrinkType,
  name: string,
  price: number,
  rating: number,
  brand: DrinkBrand,
  producer: DrinkProducer,
  alcoPrecentage: number,
  producingCountry: ProducingCountry,
  color: string,
  taste: string,
  aroma: string,
  gastronomy: string,
  drinkPhotos: DrinkPhotos,
  suitableProducts: SuitableProduct[]
}
