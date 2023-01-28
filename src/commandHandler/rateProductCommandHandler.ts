import EventManager from "../common/eventManager";
import ProductRepositoryInterface from "../domain/productRepositoryInterface";
import UserRateUpdatedEvent from "../domain/userRateUpdatedEvent";
import RateProductCommand from "./rateProductCommand";

export default class RateProductCommandHandler {
  private repository: ProductRepositoryInterface;

  constructor(repository: ProductRepositoryInterface) {
    this.repository = repository;
  }

  handle(command: RateProductCommand): void {
    const product = this.repository.findById(command.productId);
    if (product !== null) {
      product.rateProduct(command.userId, command.rating);
      this.repository.save(product);

      EventManager.publish(new UserRateUpdatedEvent(command.productId));
    }
  }
}
