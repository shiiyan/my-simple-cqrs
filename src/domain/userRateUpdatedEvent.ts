import DomainEvent from "../common/domainEvent";

export default class UserRateUpdatedEvent extends DomainEvent {
  productId: number;

  constructor(productId: number) {
    super();
    this.productId = productId;
  }
}
