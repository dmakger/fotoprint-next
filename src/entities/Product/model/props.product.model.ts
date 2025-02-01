import { IQuery } from "@/shared/model/query.model"
import { IProduct } from "./product.model"
import { IRequest } from "@/shared/model/request.model"

export interface IProductPopularRequest extends IProductRequest {
    days: 7 | 30
}


export interface IProductRequest extends IRequest {
    ordering?: string
    category_id?: number
    q?: string
}


export interface IProductQuery extends IQuery {
    results: IProduct[]
}