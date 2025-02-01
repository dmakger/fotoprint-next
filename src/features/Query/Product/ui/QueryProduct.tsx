"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_QueryProduct.module.scss';

import { ListDirection } from "@/shared/data/list.data";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { IProductCoreRequest, IProductPopularRequest, IProductRequest } from "@/entities/Product/model/props.product.model";
import { ProductList } from "@/entities/Product/ui/Base/List/ui/ProductList";
import { DefaultBackendParams } from "@/shared/data/params.data";
import SuspenseL from "@/shared/ui/SuspenseL/SuspenseL";
import { ProductQueryType, productQueryHandlers } from "../data/product.query.data";

interface QueryProductProps{
    requestType: ProductQueryType;
    direction?: ListDirection;
    props?: IProductCoreRequest;
    className?: string,
}

export const QueryProduct:FC<QueryProductProps> = ({
    requestType, 
    props,
    ...rest
}) => {
    // STATE
    const [pageNumber, setPageNumber] = useState<number>(DefaultBackendParams.Page)
    const [limit, setLimit] = useState<number>(DefaultBackendParams.Limit)
    const [search, setSearch] = useState<string | undefined>()
    
    console.log('qwe search', search)

    // API
    const { data: productQuery, isLoading } = productQueryHandlers[requestType]({
        ...props, 
        limit, 
        page: pageNumber, 
        q: search,
    });
    


    return (
        <SuspenseL>
            <SuspenseL.Query setPageNumber={setPageNumber} setLimit={setLimit} setSearch={setSearch}>
                <ProductList items={productQuery?.results ?? []} isLoading={isLoading} {...rest} />
            </SuspenseL.Query>
        </SuspenseL>
    )
}
