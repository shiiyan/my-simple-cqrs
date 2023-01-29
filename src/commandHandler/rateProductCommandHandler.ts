import EventManager from "../common/eventManager";
import ProductRepositoryInterface from "../domain/productRepositoryInterface";
import UserRateUpdatedEvent from "../common/domainEventImplement/userRateUpdatedEvent";
import RateProductCommand from "./rateProductCommand";

export default class RateProductCommandHandler {
  private repository: ProductRepositoryInterface;
  private eventManager: EventManager;

  constructor(
    repository: ProductRepositoryInterface,
    eventManager: EventManager
  ) {
    this.repository = repository;
    this.eventManager = eventManager;
  }

  handle(command: RateProductCommand): void {
    const product = this.repository.findById(command.productId);
    if (product !== null) {
      product.rateProduct(command.userId, command.rating);
      this.repository.save(product);

      this.eventManager.publish(new UserRateUpdatedEvent(command.productId));
    }
  }
}
