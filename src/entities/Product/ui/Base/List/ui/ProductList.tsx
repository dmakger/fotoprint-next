import { FC } from "react"

import { cls } from "@/shared/lib/classes.lib";
import cl from './_ProductList.module.scss';

import { List } from "@/shared/ui/List/Default/List";
import { IListTop } from "@/shared/model/list.model";
import { ListDirection } from "@/shared/data/list.data";
import { IProduct } from "@/entities/Product/model/product.model";
import { IProductRequest } from "@/entities/Product/model/props.product.model";
import { ProductItem } from "../../Item/ProductItem";
import { ProductSkeleton } from "../../Skeleton/ProductSkeleton";


interface ProductListProps extends IListTop<IProduct>{
    componentProps?: IProductRequest
}

export const ProductList:FC<ProductListProps> = ({
    items,
    direction, 
    className,
    classNameItem,
    gap, 
    ...rest
}) => {    
    return (
        <List {...rest} 
            items={items}
            direction={direction} 
            component={ProductItem} 
            className={cls(direction === ListDirection.Wrap ? cl.grid : '', className)}
            componentLoading={ProductSkeleton}
            loadingProps={{
                length: 8
            }}
            gap={gap ?? 10}
            classNameItem={cls(cl.item, classNameItem)}/>
    )
}
