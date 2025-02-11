"use client"

import { FC, useState } from "react"

import { IProductCoreRequest } from "@/entities/Product/model/props.product.model";
import { ProductList } from "@/entities/Product/ui/Base/List/ui/ProductList";
import { DefaultBackendParams } from "@/shared/data/params.data";
import { ProductQueryType, productQueryHandlers } from "../data/product.query.data";
import { IQueryProps } from "@/shared/model/query.model";
import { Query } from "@/shared/ui/Query/ui/Query";


interface QueryProductProps extends IQueryProps{
    requestType: ProductQueryType;
    props?: IProductCoreRequest;
}

export const QueryProduct:FC<QueryProductProps> = ({
    requestType, 
    props,
    hasPagination=true,
    baseLink,
    ...rest
}) => {
    // STATE
    const [pageNumber, setPageNumber] = useState<number>(DefaultBackendParams.Page)
    const [limit, setLimit] = useState<number>(DefaultBackendParams.Limit)
    const [search, setSearch] = useState<string | undefined>()
    
    // API
    const { data: productQuery, isFetching: isLoading, ...apiRest } = productQueryHandlers[requestType]({
        ...props, 
        limit, 
        page: pageNumber, 
        q: search,
    });

    return (
        <Query countPage={productQuery?.countPage}
            setPageNumber={setPageNumber}
            setLimit={setLimit}
            setSearch={setSearch}
            hasPagination={hasPagination}
            baseLink={baseLink}
            isLoading={isLoading}
        >
            <ProductList items={productQuery?.results ?? []} 
                            isLoading={isLoading} 
                            isScrollToTopNeeded={true}
                            {...rest} />
        </Query>
    )
}
