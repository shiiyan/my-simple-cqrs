import ProductDaoInterface from "../queryService/productDaoInterface";
import ProductEntityManager from "./productEntityManager";
import ProductDisplay from "../readModel/productDisplay";
import ProductDisplayMapper from "../readModel/productDisplayMapper";

export default class ProductDao implements ProductDaoInterface {
  private entityManager: ProductEntityManager;

  constructor(entityManager: ProductEntityManager) {
    this.entityManager = entityManager;
  }

  findById(id: number): ProductDisplay | null {
    const entity = this.entityManager.findById(id);
    return entity !== null
      ? ProductDisplayMapper.fromProductEntity(entity)
      : null;
  }

  findAllByName(name: string): ProductDisplay[] {
    return this.entityManager
      .findAllByName(name)
      .map((entity) => ProductDisplayMapper.fromProductEntity(entity));
  }
}
