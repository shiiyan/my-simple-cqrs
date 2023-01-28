import Product from "../domain/product";
import ProductRepositoryInterface from "../domain/productRepositoryInterface";

export default class ProductRepository implements ProductRepositoryInterface {
  findById(id: number): Product | null {
    return null;
  }

  save() {}
}
