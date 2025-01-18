"use client"

import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ParentCategoryList.module.scss'
import { List } from "@/shared/ui/List/Default/List";
import { CategoryItem } from "@/entities/Metric/ui/Category/Item/CategoryItem";
import { CategoryAPI } from "@/entities/Metric/api/category.api";
import { ICategoryRequest } from "@/entities/Metric/model/props.category.metric.model";
import { IList, IListTop } from "@/shared/model/list.model";
import { ICategory } from "@/entities/Metric/model/category.metric.model";
import { ListDirection } from "@/shared/data/list.data";

interface ParentCategoryListProps extends IListTop<ICategory>{
}

export const ParentCategoryList:FC<ParentCategoryListProps> = ({
    ...rest
}) => {
    // API
    const {data: categories, isLoading} = CategoryAPI.useGetCategoriesQuery({only_parent: false} as ICategoryRequest)

    
    return (
        <List {...rest}
              component={CategoryItem} 
              items={categories ?? []}
              isLoading={isLoading} 
              direction={ListDirection.Row} />
    )
}
