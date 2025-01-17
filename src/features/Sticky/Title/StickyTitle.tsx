import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_StickyTitle.module.scss'

import { Sticky } from "@/shared/ui/Sticky/Sticky";
import { PriceVariant } from "@/shared/data/price.data";
import { Price } from "@/shared/ui/Price/Price";

interface StickyTitleProps{
    title?: string;
    price?: number;

    className?: string,
}

export const StickyTitle:FC<StickyTitleProps> = ({
    title,
    price,
    className,
}) => {
    return (
        <Sticky>
            <div className={cls(cl.block, className)}>
                <h1 className={cl.title}>{title ?? "Нет товара"}</h1>
                <div className={cl.wrapperPrice}>
                    <Price price={price ?? 0} variant={PriceVariant.Fill} classNamePrice={cl.price} />
                </div>
            </div>
        </Sticky>
    )
}
