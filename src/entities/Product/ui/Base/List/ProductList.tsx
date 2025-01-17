import { FC } from "react"

import { List } from "@/shared/ui/List/Default/List";
import { IProductRequest } from "../../../model/props.product.model";
import { ProductItem } from "../Item/ProductItem";
import { IListTopLevel } from "@/shared/model/list.model";
import { IProduct } from "../../../model/product.model";
import { ListDirection } from "@/shared/data/list.data";

import { cls } from "@/shared/lib/classes.lib";
import cl from './_ProductList.module.scss'
import { ProductSkeleton } from "../Skeleton/ProductSkeleton";


interface ProductListProps extends IListTopLevel<IProduct>{
    componentProps?: IProductRequest
}

export const ProductList:FC<ProductListProps> = ({direction, className, ...rest}) => {    
    return (
        <List {...rest} 
            direction={direction} 
            component={ProductItem} 
            className={cls(direction === ListDirection.Wrap ? cl.wrap : '', className)}
            componentLoading={ProductSkeleton}
            loadingProps={{
                length: 8
            }}/>
    )
}
