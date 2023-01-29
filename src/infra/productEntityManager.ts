import { ProductEntity } from "../entity/productEntity";

export default class ProductEntityManager {
  private entityMap: Map<number, ProductEntity> = new Map();

  findById(id: number): ProductEntity | null {
    return this.entityMap.get(id) ?? null;
  }

  findAllByName(name: string): ProductEntity[] {
    const result: ProductEntity[] = [];
    this.entityMap.forEach((product) => {
      if (product.name === name) {
        result.push(product);
      }
    });
    return result;
  }

  save(entity: ProductEntity): void {
    this.entityMap.set(entity.id, entity);
  }
}
