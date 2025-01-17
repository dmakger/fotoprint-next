import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductShelf.module.scss'
import { IProduct } from "../../../entities/Product/model/product.model";
import { IShelfTop } from "@/shared/ui/Shelf/model/shelf.model";
import { Shelf } from "@/shared/ui/Shelf/ui/Shelf";
import { ProductItem } from "../../../entities/Product/ui/Base/Item/ProductItem";

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
               }} 
               {...rest}/>
    )
}
