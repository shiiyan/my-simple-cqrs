import ProductEntityManager from "../infra/productEntityManager";
import ProductRepository from "../infra/productRepository";

export default class AverateUserRatingAggregator {
  private repository: ProductRepository;
  private entityManager: ProductEntityManager;

  constructor(
    repository: ProductRepository,
    entityManager: ProductEntityManager
  ) {
    this.repository = repository;
    this.entityManager = entityManager;
  }

  aggreate(productId: number): void {
    const product = this.repository.findById(productId);
    if (product === null) {
      throw new Error("product does not exist");
    }

    const ratings = product
      .getUserRatings()
      .map((userRating) => userRating.getRating());
    const averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;

    this.entityManager.save({
      id: product.getId(),
      averageRating: averageRating,
    });
  }
}
