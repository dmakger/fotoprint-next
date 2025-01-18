import { cls } from '@/shared/lib/classes.lib';
import cl from './_Dropdown.module.scss'

import { IDropdown } from "../model/dropdown.module";
import { Txt } from "../../Txt/ui/Txt";
import { TxtType } from "../../Txt/model/txt.model";
import { List } from "../../List/Default/List";
import { OptionItem } from "../../Option/Item/OptionItem";
import { ListDirection } from "@/shared/data/list.data";

interface DropdownProps extends IDropdown{
}

export const Dropdown = ({
    title,
    items,
    
    className,
}: DropdownProps) => {
    return (
        <div className={cls(cl.dropdown, className)}>
            <div className={cl.header}>
                <Txt text={title} type={TxtType.Span} />
            </div>
            <div className={cl.listWrapper}>
                <List component={OptionItem} 
                      items={items} 
                      direction={ListDirection.Column} />
            </div>
        </div>
    )
}
