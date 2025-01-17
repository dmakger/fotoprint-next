import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Price.module.scss'
import { PriceVariant } from "@/shared/data/price.data";
import { getPrice } from "@/shared/lib/price.lib";

interface PriceProps{
    price: number
    variant?: PriceVariant
    className?: string,
    classNamePrice?: string,
}

export const Price:FC<PriceProps> = ({
    price, 
    variant=PriceVariant.Fill, 
    className,
    classNamePrice,
}) => {
    return (
        <div className={cls(cl[variant], cl.block, className)}>
            {/* <span className={cl.price}>{price > 0 ? `${price} ₽` : "Без цены"} </span> */}
            <span className={cls(cl.price, classNamePrice)}>{price > 0 ? `${getPrice(price)} ₽` : "Без цены"} </span>
        </div>
    )
}
