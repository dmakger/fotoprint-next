import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CharacteristicOption.module.scss'
import { ICharacteristic } from "../../../model/characteristic.metric.model";
import { IListItem } from "@/shared/model/list.model";
import Link from "next/link";
import { MAIN_PAGES } from "@/config/pages-url.config";

interface CharacteristicOptionProps extends IListItem<ICharacteristic> {
    href?: string
}

export const CharacteristicOption:FC<CharacteristicOptionProps> = ({
    item: characteristic, 
    onClick,
    href,
    className
}) => {

    // HANDLE
    const handleOnClick = () => {
        if (onClick) onClick()
    }

    const html = (
        <button onClick={handleOnClick} className={cls(characteristic.isActive ? cl.active : '', cl.block, className)}>
            <span className={cl.title}>{characteristic.title} {characteristic.id}</span>
        </button>
    )

    if (!href) 
        return html
    return (
        <Link href={href}>{html}</Link>
    )
}
