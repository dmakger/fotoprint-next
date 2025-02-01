import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CombinationList.module.scss'
import { IListTop } from "@/shared/model/list.model";
import { ICombination } from "@/entities/Metric/model/characteristic.metric.model";
import { List } from "@/shared/ui/List/Default/List";
import { CombinationOption } from "../Item/CombinationOption";
import { WrapperBlock } from "@/shared/ui/Wrapper/Block/ui/WrapperBlock";
import { WrapperBlockSize, WrapperBlockVariant } from "@/shared/ui/Wrapper/Block/data/block.wrapper.data";

interface CombinationListProps extends IListTop<ICombination>{
    hasTitleGroup?: boolean
}

export const CombinationList:FC<CombinationListProps> = ({
    hasTitleGroup, 
    items, 
    className, 
    ...rest
}) => {    
    const list = (
        <List {...rest} items={items} component={CombinationOption} className={cls(cl.list, className)}/>
    )

    if (!hasTitleGroup || !items || items.length === 0)
        return list
    return (
        // <div className={cl.wrapper}>
        //     <span className={cl.title}>{items[0].characteristic.characteristicGroup.title}</span>
        //     {list}
        // </div>

        <WrapperBlock 
            variant={WrapperBlockVariant.Empty} 
            size={WrapperBlockSize.Without} 
            title={items[0].characteristic.characteristicGroup.title}
        >
            {list}
        </WrapperBlock>
    )
}
