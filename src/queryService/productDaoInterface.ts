import Product from "../domain/product";
import ProductDisplay from "../readModel/productDisplay";

export default interface ProductDaoInterface {
  findById(id: number): ProductDisplay | null;
  findAllByName(name: string): ProductDisplay[];
}
