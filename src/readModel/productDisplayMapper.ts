import { ProductEntity } from "../entity/productEntity";
import ProductDisplay from "./productDisplay";

export default class ProductDisplayMapper {
    static fromProductEntity(entity: ProductEntity): ProductDisplay {
        return new ProductDisplay(
            entity.id,
            entity.name,
            entity.description,
            entity.unitPrice,
            entity.isOutOfStock,
            entity.averageUserRating
        );
    }
}