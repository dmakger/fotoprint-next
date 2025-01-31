import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperAbsolute.module.scss'

interface WrapperAbsoluteProps{
    children?: ReactNode
    className?: string,
}

export const WrapperAbsolute:FC<WrapperAbsoluteProps> = ({
    children,
    className,
}) => {
    return (
        <div className={cls(cl.wrapper, className)}>
            {children}
        </div>
    )
}
