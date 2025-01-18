import { FC } from "react"

import { cls } from "@/shared/lib/classes.lib";
import cl from './_ProductList.module.scss';

import { List } from "@/shared/ui/List/Default/List";
import { IListTopLevel } from "@/shared/model/list.model";
import { ListDirection } from "@/shared/data/list.data";
import { IProduct } from "@/entities/Product/model/product.model";
import { IProductRequest } from "@/entities/Product/model/props.product.model";
import { ProductItem } from "../../Item/ProductItem";
import { ProductSkeleton } from "../../Skeleton/ProductSkeleton";


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
