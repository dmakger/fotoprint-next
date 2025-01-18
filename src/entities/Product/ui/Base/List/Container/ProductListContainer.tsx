"use client"

import { FC, useState } from "react"

import SuspenseL from "@/shared/ui/SuspenseL/SuspenseL";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { IProductRequest } from "@/entities/Product/model/props.product.model";
import { DefaultBackendParams } from "@/shared/data/params.data";
import { ListDirection } from "@/shared/data/list.data";
import { ProductList } from "../ui/ProductList";

interface ProductListContainerProps {
    direction?: ListDirection;
    className?: string,
}

export const ProductListContainer:FC<ProductListContainerProps> = ({...rest}) => {
    // STATE
    const [pageNumber, setPageNumber] = useState<number>(DefaultBackendParams.Page)
    const [limit, setLimit] = useState<number>(DefaultBackendParams.Limit)
    const [search, setSearch] = useState<string | undefined>()

    // API
    const {data: productQuery, isLoading} = ProductAPI.useGetProductsQuery({limit, page: pageNumber, q: search} as IProductRequest, {refetchOnMountOrArgChange: true})
    
    return (
        <SuspenseL>
            <SuspenseL.Query setPageNumber={setPageNumber} setLimit={setLimit} setSearch={setSearch}>
                <ProductList items={productQuery?.results ?? []} isLoading={isLoading} {...rest} />
            </SuspenseL.Query>
        </SuspenseL>
    )
}
