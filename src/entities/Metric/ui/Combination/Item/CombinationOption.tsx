import { FC } from "react"

import { ICombination } from "../../../model/characteristic.metric.model";
import { IListItem } from "@/shared/model/list.model";
import Link from "next/link";
import { OptionItem } from "@/shared/ui/Option/Item/OptionItem";
import { combinationToOption } from "@/entities/Metric/lib/option.characteristic.metric.lib";

interface CombinationOptionProps extends IListItem<ICombination> {
    href?: string
}

export const CombinationOption:FC<CombinationOptionProps> = ({
    item: combination, 
    href,
    ...rest
}) => {

    const option = combinationToOption(combination)

    const html = (
        <OptionItem {...rest} item={option} isActive={combination.isActive} />
        // <button onClick={handleOnClick} className={cls(characteristic.isActive ? cl.active : '', cl.block, className)}>
        //     <span className={cl.title}>{characteristic.characteristic.title} {characteristic.id} {characteristic.productCombinationId}</span>
        // </button>
    )

    if (!href) 
        return html
    return (
        <Link href={href}>{html}</Link>
    )
}
