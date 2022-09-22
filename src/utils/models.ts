export interface BarItem {
  name: string;
  imageSrc: string;
  filters?: Array<string>;
}

export interface LunchItemsModel {
  nameOfDish: string;
  info?: string;
  cost?: number;
  allergies?: Array<"vegetarian" | "lactose" | "vegan" | "gluten">;
}

export interface LunchCardModel {
  restaurant: string;
  lunchItems: Array<LunchItemsModel>;
  navLink?: string;
  optionalInfo?: string;
}
