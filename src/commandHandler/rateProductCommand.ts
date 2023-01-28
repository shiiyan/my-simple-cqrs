import { Guid } from "guid-typescript";

export default class RateProductCommand {
  id: Guid;
  productId: number;
  userId: number;
  rating: number;

  constructor(productId: number, userId: number, rating: number) {
    this.id = Guid.create();
    this.productId = productId;
    this.userId = userId;
    this.rating = rating;
  }
}
