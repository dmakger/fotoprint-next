import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import { IListTopLevel } from "@/shared/model/list.model";
import { ICategory } from "@/entities/Metric/model/category.metric.model";
import { List } from "@/shared/ui/List/Default/List";
import { CategoryItem } from "../Item/CategoryItem";

interface CategoryListProps extends IListTopLevel<ICategory>{}

export const CategoryList:FC<CategoryListProps> = ({
    ...rest
}) => {
    return (
        <List component={CategoryItem} {...rest} />
    )
}
