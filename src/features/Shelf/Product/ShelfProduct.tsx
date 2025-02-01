import { FC } from "react"

import cl from './_ShelfProduct.module.scss'

import { IProduct } from "../../../entities/Product/model/product.model";
import { IShelfTop } from "@/shared/ui/Shelf/model/shelf.model";
import { Shelf } from "@/shared/ui/Shelf/ui/Shelf";
import { ProductItem } from "../../../entities/Product/ui/Base/Item/ProductItem";
import { ProductSkeleton } from "@/entities/Product/ui/Base/Skeleton/ProductSkeleton";
import { cls } from "@/shared/lib/classes.lib";

interface ShelfProductProps extends IShelfTop<IProduct> {}

export const ShelfProduct:FC<ShelfProductProps> = ({
    title,
    sliderParams,
    ...rest
}) => {
    return (
        <Shelf title={title ?? "Товары"} 
               sliderParams={{
                    ...sliderParams,
                    component: sliderParams.component ?? ProductItem,
                    componentLoading: sliderParams.componentLoading ?? ProductSkeleton,
                    classNameItem: cls(sliderParams.classNameItem, cl.product),
               }} 
               {...rest}/>
    )
}
