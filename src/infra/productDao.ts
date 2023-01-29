import ProductDaoInterface from "../queryService/productDaoInterface";
import ProductEntityManager from "./productEntityManager";
import ProductDisplay from "../readModel/productDisplay";

export default class ProductDao implements ProductDaoInterface {
  private entityManager: ProductEntityManager;

  constructor(entityManager: ProductEntityManager) {
    this.entityManager = entityManager;
  }

  findById(id: number): ProductDisplay | null {}

  findAllByName(name: string): ProductDisplay[] {}
}
