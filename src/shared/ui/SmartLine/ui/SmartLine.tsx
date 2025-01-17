import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SmartLine.module.scss'

interface SmartLineProps{
    className?: string,
}

export const SmartLine:FC<SmartLineProps> = ({className}) => {
    return (
        <div className={cls(cl.block, className)}>
            {/* <CategoryLine categoryList={categoriesWithOther} className={cl.list} />
            <CategoryLine categoryList={categoriesWithOther} className={cl.list} /> */}
        </div>
    )
}
