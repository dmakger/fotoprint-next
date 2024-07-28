import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CharacteristicList.module.scss'
import { IListTopLevel } from "@/shared/model/list.model";
import { ICharacteristic } from "@/entities/Metric/model/characteristic.metric.model";
import { CharacteristicOption } from "../Item/CharacteristicOption";
import { ListDirection } from "@/shared/data/list.data";
import { List } from "@/shared/ui/List/Default/List";

interface CharacteristicListProps extends IListTopLevel<ICharacteristic>{
    hasTitleGroup?: boolean
}

export const CharacteristicList:FC<CharacteristicListProps> = ({hasTitleGroup, items, className, ...rest}) => {    
    const list = (
        <List {...rest} items={items} component={CharacteristicOption} className={cls(cl.list, className)}/>
    )

    if (!hasTitleGroup)
        return list
    return (
        <div className={cl.wrapper}>
            <span className={cl.title}>{items[0].characteristicGroup.title}</span>
            {list}
        </div>
    )
}
