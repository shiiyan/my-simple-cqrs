import EventConsumerInterface from "../common/eventConsumerInterface";
import UserRateUpdatedEvent from "../common/domainEventImplement/userRateUpdatedEvent";
import ProductEntityManager from "../infra/productEntityManager";
import ProductRepository from "../infra/productRepository";

export default class UserRateUpdatedEventConsumer
  implements EventConsumerInterface
{
  private repository: ProductRepository;
  private entityManager: ProductEntityManager;

  constructor(
    repository: ProductRepository,
    entityManager: ProductEntityManager
  ) {
    this.repository = repository;
    this.entityManager = entityManager;
  }

  consume(event: UserRateUpdatedEvent): void {
    const product = this.repository.findById(event.productId);
    if (product === null) {
      throw new Error("product does not exist");
    }

    const ratings = product
      .getUserRatings()
      .map((userRating) => userRating.getRating());
    const averageRating =
      ratings.length > 0 ? this.getAverageRating(ratings) : 0;

    this.entityManager.save({
      id: product.getId(),
      name: product.getName(),
      description: product.getDescription(),
      unitPrice: product.getUnitPrice(),
      isOutOfStock: product.getCurrentStock() > 0,
      averageUserRating: averageRating,
    });
  }

  private getAverageRating(ratings: number[]): number {
    return (
      ratings.reduce((previous, current) => previous + current, 0) /
      ratings.length
    );
  }
}
