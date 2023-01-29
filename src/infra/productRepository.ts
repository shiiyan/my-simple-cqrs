import Product from "../domain/product";
import ProductRepositoryInterface from "../domain/productRepositoryInterface";

export default class ProductRepository implements ProductRepositoryInterface {
  private productMap: Map<number, Product> = new Map();

  findById(id: number): Product | null {
    return this.productMap.get(id) ?? null;
  }

  save(product: Product): void {
    this.productMap.set(product.getId(), product);
  }
}
