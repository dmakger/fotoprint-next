import { ProductAPI } from "@/entities/Product/api/product.api";
import { IProductCoreRequest, IProductPopularRequest, IProductRequest } from "@/entities/Product/model/props.product.model";


// Enum для типа запроса
export enum ProductQueryType {
    Base = "base",
    Popular = "popular",
}

// Маппинг запросов для каждого типа
export const productQueryHandlers = {
    [ProductQueryType.Base]: (props: IProductCoreRequest) => 
        ProductAPI.useGetProductsQuery(props as IProductRequest, { refetchOnMountOrArgChange: true }),

    [ProductQueryType.Popular]: (props: IProductCoreRequest) => 
        ProductAPI.useGetProductsPopularQuery(props as IProductPopularRequest, { refetchOnMountOrArgChange: true }),
};