"use client"

import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_PopularityProductShelf.module.scss'
import { ShelfProduct } from "@/features/Shelf/Product/ShelfProduct";
import { IProductProps } from "@/entities/Product/model/props.product.model";
import { ProductAPI } from "@/entities/Product/api/product.api";

interface PopularProductShelfProps{
    className?: string,
}

export const PopularProductShelf:FC<PopularProductShelfProps> = ({className}) => {
    // API
    const {data: productQuery} = ProductAPI.useGetProductsQuery({
        limit: 12,
        page: 1,
    } as IProductProps, {refetchOnMountOrArgChange: true})

    
    return (
        <ShelfProduct sliderParams={{
            items: productQuery?.results ?? []
        }} />
    )
}
