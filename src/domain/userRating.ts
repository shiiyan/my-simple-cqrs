export default class UserRating {
  private userId: number;
  private rating: number;

  constructor(userId: number, rating: number) {
    this.userId = userId;
    this.rating = rating;
  }

  getUserId(): number {
    return this.userId;
  }

  getRating(): number {
    return this.rating;
  }
}
