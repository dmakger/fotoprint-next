import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Accordion.module.scss';

import { IAccordion } from "../model/accordion.model";
import { Txt } from "../../Txt/ui/Txt";
import { TxtType } from "../../Txt/model/txt.model";
import { List } from "../../List/Default/List";
import { OptionItem } from "../../Option/Item/OptionItem";
import { ListDirection } from "@/shared/data/list.data";

interface AccordionProps extends IAccordion {}

export const Accordion:FC<AccordionProps> = ({
    title,
    items,
    className,
}) => {
    return (
        <div className={cls(className)}>
            <div className={cl.header}>
                <Txt text={title} type={TxtType.H3} />
                
            </div>
            <List component={OptionItem} 
                  items={items}
                  direction={ListDirection.Column}
                  className={cl.list} />
        </div>
    )
}
