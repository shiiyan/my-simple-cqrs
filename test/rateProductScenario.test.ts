import RateProductCommand from "../src/commandHandler/rateProductCommand";
import RateProductCommandHandler from "../src/commandHandler/rateProductCommandHandler";
import EventManager from "../src/common/eventManager";
import Product from "../src/domain/product";
import UserRating from "../src/domain/userRating";
import UserRateUpdatedEventConsumer from "../src/eventConsumer/userRateUpdatedEventConsumer";
import ProductDao from "../src/infra/productDao";
import ProductEntityManager from "../src/infra/productEntityManager";
import ProductRepository from "../src/infra/productRepository";
import ProductDisplay from "../src/readModel/productDisplay";

describe("rate product scenario", () => {
  let repository: ProductRepository;
  let entityManager: ProductEntityManager;
  let dao: ProductDao;
  let eventManager: EventManager;
  let eventConsumer: UserRateUpdatedEventConsumer;
  let commandHandler: RateProductCommandHandler;

  beforeEach(() => {
    repository = new ProductRepository();
    entityManager = new ProductEntityManager();
    dao = new ProductDao(entityManager);
    eventManager = new EventManager();
    eventConsumer = new UserRateUpdatedEventConsumer(repository, entityManager);
    eventManager.subscribe(eventConsumer);
    commandHandler = new RateProductCommandHandler(repository, eventManager);
  });

  test("given a product, when a user rates it successfully, then its average rating should be updated", () => {
    // given
    const product = new Product(
      1,
      "test product",
      "a testing product",
      100,
      1,
      [new UserRating(122, 0)]
    );
    repository.save(product);

    // when
    const command = new RateProductCommand(1, 123, 10);
    commandHandler.handle(command);

    // then
    const productDisplay = dao.findById(1);
    expect(productDisplay).toBeInstanceOf(ProductDisplay);
    expect(productDisplay).toHaveProperty("id", 1);
    expect(productDisplay).toHaveProperty("name", "test product");
    expect(productDisplay).toHaveProperty("description", "a testing product");
    expect(productDisplay).toHaveProperty("unitPrice", 100);
    expect(productDisplay).toHaveProperty("isOutOfStock", false);
    expect(productDisplay).toHaveProperty("averageUserRating", 5);
  });
});
