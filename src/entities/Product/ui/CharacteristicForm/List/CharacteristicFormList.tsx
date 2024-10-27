import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CharacteristicFormList.module.scss'
import { IListTopLevel } from "@/shared/model/list.model";
import { ICharacteristicForm } from "@/entities/Product/model/form.product.model";
import { WrapperBlock } from "@/shared/ui/Wrapper/Block/ui/WrapperBlock";
import { WrapperBlockSize, WrapperBlockVariant } from "@/shared/ui/Wrapper/Block/data/block.wrapper.data";
import { List } from "@/shared/ui/List/Default/List";
import { CharacteristicFormItem } from "../Item/CharacteristicFormItem";
import { ListDirection } from "@/shared/data/list.data";

interface CharacteristicFormListProps extends IListTopLevel<ICharacteristicForm>{
    classNameWrapper?: string
}

export const CharacteristicFormList:FC<CharacteristicFormListProps> = ({
    items,
    className,
    classNameWrapper,

    ...rest
}) => {
    return (
        <WrapperBlock 
            variant={WrapperBlockVariant.Empty} 
            size={WrapperBlockSize.Without} 
            title={items.length > 0 ? items[0].characteristicGroup.title : ''}
            classNameTitle={cl.title}
        >
            <List {...rest}
                direction={ListDirection.Wrap} 
                items={items} 
                component={CharacteristicFormItem} 
                className={cls(cl.list, className)}
            />
        </WrapperBlock>
    )
}
