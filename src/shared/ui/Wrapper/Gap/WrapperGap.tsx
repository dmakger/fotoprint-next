import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperGap.module.scss'

interface WrapperGapProps {
    fullHeight?: boolean
    className?: string,
    children: ReactNode
}

export const WrapperGap:FC<WrapperGapProps> = ({
    fullHeight=true,
    className, 
    children,
}) => {
    return (
        <div className={cls(fullHeight ? cl.fullHeight : '', cl.layout, className)}>
            {children}
        </div>
    )
}
