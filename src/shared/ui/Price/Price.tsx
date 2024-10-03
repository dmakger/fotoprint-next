import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Price.module.scss'
import { PriceVariant } from "@/shared/data/price.data";

interface PriceProps{
    price: number
    variant?: PriceVariant
    className?: string,
}

export const Price:FC<PriceProps> = ({price, variant=PriceVariant.Fill, className}) => {
    return (
        <div className={cls(cl[variant], cl.block, className)}>
            <span className={cl.price}>{price > 0 ? `${price} ₽` : "Без цены"} </span>
        </div>
    )
}
