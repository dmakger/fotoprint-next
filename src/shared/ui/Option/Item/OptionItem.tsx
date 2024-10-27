import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_OptionItem.module.scss'
import { IListItem } from "@/shared/model/list.model";
import { IOption } from "@/shared/model/option.model";

interface OptionItemProps extends IListItem<IOption> {}

export const OptionItem:FC<OptionItemProps> = ({
    item,
    isActive,
    onClick,
    className,
}) => {

    // HANDLE
    const handleOnClick = () => {
        if (onClick)
            onClick()
    }

    // HTML
    const html = (
        <div className={cls(isActive ? cl.active : '', cl.block, className)}>
            <span className={cl.title}>{item.title}</span>
        </div>
    )

    if (!onClick) 
        return html

    return (
        <button onClick={handleOnClick}>
            {html}
        </button>
    )
}
