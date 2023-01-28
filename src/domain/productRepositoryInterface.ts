import Product from "./product";

export default interface ProductRepositoryInterface {
  findById(id: number): Product | null;
  save(product: Product): void;
}
