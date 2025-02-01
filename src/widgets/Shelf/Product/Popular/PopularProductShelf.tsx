"use client"

import { FC } from "react"

import { ShelfProduct } from "@/features/Shelf/Product/ShelfProduct";
import { IProductPopularRequest, IProductRequest } from "@/entities/Product/model/props.product.model";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { MAIN_PAGES } from "@/config/pages-url.config";

interface PopularProductShelfProps{
    days: IProductPopularRequest['days']
    className?: string,
}

export const PopularProductShelf:FC<PopularProductShelfProps> = ({
    days,
    className,
}) => {
    // API
    const {data: productQuery, isLoading} = ProductAPI.useGetProductsPopularQuery({
        days,
        limit: 12,
        page: 1,
    } as IProductPopularRequest, {refetchOnMountOrArgChange: true})

    
    return (
        <ShelfProduct href={MAIN_PAGES.Catalog} 
                      title={"Хит недели"}
                      sliderParams={{
                        items: productQuery?.results ?? [],
                        isLoading: isLoading
                      }} />
    )
}
