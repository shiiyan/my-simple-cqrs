type ProductEntity = {
  id: number;
  name: string;
  description: string;
  unitPrice: number;
  isOutOfStock: boolean;
  averageUserRating: number;
};

export default class ProductEntityManager {
  private entityMap: Map<number, ProductEntity> = new Map();

  findById(id: number): ProductEntity | null {
    return this.entityMap.get(id) ?? null;
  }

  save(entity: ProductEntity): void {
    this.entityMap.set(entity.id, entity);
  }
}
