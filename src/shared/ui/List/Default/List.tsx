import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_List.module.scss'
import { IList } from "@/shared/model/list.model";
import { DEFAULT__LIST_DIRECTION } from "@/shared/data/list.data";

interface ListProps<T> extends IList<T> {}

export const List = <T extends object>({
    items, 
    component: ListItemComponent,
    componentProps,
    direction = DEFAULT__LIST_DIRECTION,
    className,
    onClickItem=()=>{},
}: ListProps<T>) => {
    return (
        <div className={cls(cl.list, cl[direction], className)}>
            {items.map((it, index) => (
               <ListItemComponent 
                    {...componentProps} 
                    item={it}
                    onClick={() => onClickItem(it, index)} /> 
            ))}
        </div>
    )
}
