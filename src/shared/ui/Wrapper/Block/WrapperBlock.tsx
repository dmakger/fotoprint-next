import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperBlock.module.scss'
import { WrapperBlockVariant } from "./data/block.wrapper.data";

interface WrapperBlockProps{
    variant?: WrapperBlockVariant
    
    className?: string,
    children?: ReactNode
}

export const WrapperBlock:FC<WrapperBlockProps> = ({
    variant=WrapperBlockVariant.Min,

    className, 
    children
}) => {
    return (
        <div className={cls(cl.wrapper, cl[variant], className)}>
            {children}
        </div>
    )
}
