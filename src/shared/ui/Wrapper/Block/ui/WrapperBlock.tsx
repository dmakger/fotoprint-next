import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperBlock.module.scss'
import { WrapperBlockSize, WrapperBlockVariant } from "../data/block.wrapper.data";

interface WrapperBlockProps{
    variant?: WrapperBlockVariant
    size?: WrapperBlockSize
    
    title?: string
    
    children?: ReactNode
    className?: string,
    classNameTitle?: string,
    classNameContent?: string,
}

export const WrapperBlock:FC<WrapperBlockProps> = ({
    variant=WrapperBlockVariant.Wide,
    size=WrapperBlockSize.Small,
    title,

    children,
    className, 
    classNameTitle,
    classNameContent,
}) => {
    return (
        <div className={cls(cl.wrapper, cl[variant], cl[size], className)}>
            {title && (
                <h2 className={cls(cl.title, classNameTitle)}>{title}</h2>
            )}
            <div className={cls(cl.content, classNameContent)}>
                {children}
            </div>
        </div>
    )
}
