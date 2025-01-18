import { FC } from "react"

import { IListTop } from "@/shared/model/list.model";
import { IOption } from "@/shared/model/option.model";
import { List } from "../../List/Default/List";
import { OptionItem } from "../Item/OptionItem";
import { OptionVariant } from "@/shared/data/option.data";

interface OptionListProps extends IListTop<IOption> {
    variant?: OptionVariant
}

export const OptionList:FC<OptionListProps> = ({
    variant,
    componentProps,
    ...rest
}) => {
    return (
        <List {...rest} 
              component={OptionItem}
              componentProps={{...componentProps, variant}}  />
    )
}
