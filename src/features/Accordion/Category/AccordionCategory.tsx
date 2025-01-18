import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_AccordionCategory.module.scss'

import { IAccordionTop } from "@/shared/ui/Accordion/model/accordion.model";
import { Accordion } from "@/shared/ui/Accordion/ui/Accordion";
import { categoryListToOptionList } from "@/entities/Metric/lib/option.category.metric.lib";
import { ICategory } from "@/entities/Metric/model/category.metric.model";

interface AccordionCategoryProps extends IAccordionTop<ICategory> {}

export const AccordionCategory:FC<AccordionCategoryProps> = ({
    title="Категории",
    items,
    ...rest
}) => {
    return (
        <Accordion title={title} 
                   items={categoryListToOptionList(items)}
                   {...rest} />
    )
}
