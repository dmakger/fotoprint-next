import { IQueryResponse } from "@/shared/model/query.model"
import { IProduct } from "./product.model"
import { IRequest } from "@/shared/model/request.model"


/**
 * Аргументы для запросов на получение ПОПУЛЯРНЫХ продуктов
 */
export interface IProductPopularRequest extends IProductRequest {
    days: 7 | 30
}

/**
 * Аргументы для запросов на получение всех продуктов
 */
export interface IProductRequest extends IRequest {
    ordering?: string
    category_id?: number
    q?: string
}

/**
 * Аргументы для ВСЕХ запросов для продуктов 
 */
export type IProductCoreRequest = (
    IProductRequest 
    | IProductPopularRequest
) 


// QUERY
export interface IProductQuery extends IQueryResponse {
    results: IProduct[]
}