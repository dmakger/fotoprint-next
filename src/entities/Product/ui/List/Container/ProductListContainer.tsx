"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductListContainer.module.scss'
import SuspenseL from "@/shared/ui/SuspenseL/SuspenseL";
import { ProductList } from "../ProductList";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { IProductProps } from "@/entities/Product/model/props.product.model";
import { DefaultBackendParams } from "@/shared/data/params.data";
import { ListDirection } from "@/shared/data/list.data";

interface ProductListContainerProps {
    direction?: ListDirection;
    className?: string,
}

export const ProductListContainer:FC<ProductListContainerProps> = ({...rest}) => {
    // STATE
    const [pageNumber, setPageNumber] = useState<number>(DefaultBackendParams.Page)
    const [limit, setLimit] = useState<number>(DefaultBackendParams.Limit)

    // API
    const {data: productQuery} = ProductAPI.useGetProductsQuery({limit, page: pageNumber} as IProductProps, {refetchOnMountOrArgChange: true})
    
    return (
        <SuspenseL.Query setPageNumber={setPageNumber} setLimit={setLimit}>
            {productQuery && (
                <ProductList componentProps={{}} items={productQuery.results} {...rest} />
            )}
        </SuspenseL.Query>
    )
}
