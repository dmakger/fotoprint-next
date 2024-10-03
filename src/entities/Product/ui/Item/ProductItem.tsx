import { FC } from "react"
import Link from "next/link";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductItem.module.scss'
import { IListItem } from "@/shared/model/list.model";
import { IProduct } from "../../model/product.model";
import { ImageAPI } from "@/shared/ui/Image/ui/API/ImageAPI";
import { Price } from "@/shared/ui/Price/Price";
import { getProductImage } from "../../lib/image.product.lib";
import { getTextByExecutionTime } from "@/entities/Metric/lib/executionTime.metric.lib";
import { MAIN_PAGES } from "@/config/pages-url.config";

interface ProductItemProps extends IListItem<IProduct> {
    linkToProduct?: boolean
}

export const ProductItem:FC<ProductItemProps> = ({
    item: product,
    linkToProduct=true,
    className,
}) => {
    return (
        <Link href={linkToProduct ? MAIN_PAGES.PRODUCT(product.id) : '#'} className={cls(cl.product, className)}>
            <ImageAPI src={getProductImage(product.image)} fill={false} className={cl.image} />
            <div className={cl.bottom}>
                <h4 className={cl.title}>{product.title}</h4>
                <span className={cl.executionTime}>{getTextByExecutionTime(product.executionTime)}</span>
                <Price price={product.price} className={cl.price}/>
            </div>
        </Link>
    )
}
