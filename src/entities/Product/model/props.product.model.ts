import { IQuery } from "@/shared/model/query.model"
import { IProduct } from "./product.model"

export interface IProductProps {
    limit?: number
    page?: number
    ordering?: string
    category_id?: number
    q?: string
}


export interface IProductQuery extends IQuery {
    results: IProduct[]
}