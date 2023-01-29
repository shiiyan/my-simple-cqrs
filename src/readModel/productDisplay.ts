export default class ProductDisplay {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly unitPrice: number;
  readonly isOutOfStock: boolean;
  readonly averageUserRating: number;

  constructor(
    id: number,
    name: string,
    description: string,
    unitPrice: number,
    isOutOfStock: boolean,
    averageUserRating: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.isOutOfStock = isOutOfStock;
    this.averageUserRating = averageUserRating;
  }
}
