"use client"

import { FC } from "react"

import { ShelfProduct } from "@/features/Shelf/Product/ShelfProduct";
import { IProductPopularRequest, IProductRequest } from "@/entities/Product/model/props.product.model";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { IShelfWidget } from "@/shared/ui/Shelf/model/shelf.model";
import { IProduct } from "@/entities/Product/model/product.model";
import { getPopularProductsByDays } from "../lib/popular.product.shelf.lib";


interface PopularProductShelfProps extends IShelfWidget<IProduct>{
    days: IProductPopularRequest['days']
}

export const PopularProductShelf:FC<PopularProductShelfProps> = ({
    days,

    title,
    href,
    ...rest
}) => {
    // API
    const {data: productQuery, isLoading} = ProductAPI.useGetProductsPopularQuery({
        days,
        limit: 12,
        page: 1,
    } as IProductPopularRequest, {refetchOnMountOrArgChange: true})

    // STATIC
    const popularShelfData = getPopularProductsByDays(days)

    return (
        <ShelfProduct href={href ?? popularShelfData.href} 
                      title={title ?? popularShelfData.title}
                      sliderParams={{
                        items: productQuery?.results ?? [],
                        isLoading: isLoading
                      }} 
                      {...rest} />
    )
}
