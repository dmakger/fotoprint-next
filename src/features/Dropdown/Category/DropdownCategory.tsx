import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_DropdownCategory.module.scss'

import { Dropdown } from "@/shared/ui/Dropdown/ui/Dropdown";
import { IDropdownTop } from "@/shared/ui/Dropdown/model/dropdown.module";
import { ICategory } from "@/entities/Metric/model/category.metric.model";
import { categoryListToOptionList } from "@/entities/Metric/lib/option.category.metric.lib";

interface DropdownCategoryProps extends IDropdownTop<ICategory> {}

export const DropdownCategory = ({
    title="Категории",
    items,
    className,
}: DropdownCategoryProps) => {
    return (
        <Dropdown title={title} 
                  items={categoryListToOptionList(items)} />
    )
}
