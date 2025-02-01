import { IProductPopularRequest } from "@/entities/Product/model/props.product.model";
import { POPULAR_PRODUCTS_WEEK, POPULAR_PRODUCTS_MONTH } from "../data/popular.product.shelf.data";

/**
 * @returns объект для полки с популярными товарами за определённое время
 */
export const getPopularProductsByDays = (days: IProductPopularRequest['days']) => {
    if (days === 7)
        return POPULAR_PRODUCTS_WEEK
    return POPULAR_PRODUCTS_MONTH
}