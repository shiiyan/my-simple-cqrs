import UserRating from "./userRating";

export default class Product {
  private id: number;
  private name: string;
  private description: string;
  private unitPrice: number;
  private currentStock: number;
  private userRatings: UserRating[];

  constructor(
    id: number,
    name: string,
    description: string,
    unitPrice: number,
    currentStock: number,
    userRatings: UserRating[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.currentStock = currentStock;
    this.userRatings = userRatings;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getUnitPrice(): number {
    return this.unitPrice;
  }

  getCurrentStock(): number {
    return this.currentStock;
  }

  getUserRatings(): UserRating[] {
    return this.userRatings;
  }

  rateProduct(userId: number, rating: number): void {
    if (rating < 0 || rating > 10) {
      throw new Error("rating is invalid");
    }

    if (this.filterRatingOfSameUser(userId).length > 0) {
      throw new Error("user already rated");
    }

    this.userRatings.push(new UserRating(userId, rating));
  }

  private filterRatingOfSameUser(userId: number): UserRating[] {
    return this.userRatings.filter(
      (userRating) => userRating.getUserId() === userId
    );
  }
}
