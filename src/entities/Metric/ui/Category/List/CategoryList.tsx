import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import { IListTop } from "@/shared/model/list.model";
import { ICategory } from "@/entities/Metric/model/category.metric.model";
import { List } from "@/shared/ui/List/Default/List";
import { CategoryItem } from "../Item/CategoryItem";

interface CategoryListProps extends IListTop<ICategory>{}

export const CategoryList:FC<CategoryListProps> = ({
    ...rest
}) => {
    return (
        <List component={CategoryItem} {...rest} />
    )
}
