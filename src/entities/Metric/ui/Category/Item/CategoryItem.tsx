import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CategoryItem.module.scss'
import { ICategory } from "@/entities/Metric/model/category.metric.model";
import { IListItem } from "@/shared/model/list.model";
import Link from "next/link";

interface CategoryItemProps extends IListItem<ICategory>{
    href?: string
    className?: string,
}

export const CategoryItem:FC<CategoryItemProps> = ({
    item,
    href,
    className,
    ...rest
}) => {
    const html = (
        <div className={cls(cl.category, className)}>
            <span className={cl.title}>{item.title}</span>
        </div>
    )

    if (!href) 
        return html
    return (
        <Link href={href}>{html}</Link>
    )
}
