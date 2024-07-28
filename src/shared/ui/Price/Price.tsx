import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Price.module.scss'

interface PriceProps{
    price: number
    className?: string,
}

export const Price:FC<PriceProps> = ({price, className}) => {
    return (
        <div className={cls(cl.block, className)}>
            <span className={cl.price}>{price > 0 ? `${price}₽` : "Без цены"} </span>
        </div>
    )
}
