import { FC } from "react"
import { IListItem } from "@/shared/model/list.model";
import { ICharacteristicForm } from "@/entities/Product/model/form.product.model";
import { OptionItem } from "@/shared/ui/Option/Item/OptionItem";
import { characteristicFormToOption } from "@/entities/Product/lib/option.characteristic.metric.lib";

interface CharacteristicFormItemProps extends IListItem<ICharacteristicForm>{}

export const CharacteristicFormItem:FC<CharacteristicFormItemProps> = ({
    item,
    isActive,
    activeId,
    ...rest
}) => {
    const option = characteristicFormToOption(item)
    return (
        <OptionItem {...rest} item={option} isActive={isActive === undefined ? activeId === item.id : isActive} />
    )
}
