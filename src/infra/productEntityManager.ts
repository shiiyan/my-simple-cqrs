type ProductEntity = {
  id: number;
  name: string;
  description: string;
  unitPrice: number;
  isOutOfStock: boolean;
  averageUserRating: number;
};

export default class ProductEntityManager {
  private entityList: ProductEntity[] = [];

  findById(id: number): ProductEntity | null {
    return {};
  }
  save(entity: ProductEntity): void {}
}
