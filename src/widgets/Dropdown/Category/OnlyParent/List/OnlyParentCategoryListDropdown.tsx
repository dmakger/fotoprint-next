"use client"

import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_OnlyParentCategoryListDropdown.module.scss'
import { CategoryAPI } from "@/entities/Metric/api/category.api";
import { ICategoryRequest } from "@/entities/Metric/model/props.category.metric.model";
import { DropdownCategory } from "@/features/Dropdown/Category/DropdownCategory";

interface OnlyParentCategoryListDropdownProps{
    className?: string,
}

export const OnlyParentCategoryListDropdown:FC<OnlyParentCategoryListDropdownProps> = ({className}) => {
    // API
    const {data: categories, isLoading} = CategoryAPI.useGetCategoriesQuery({only_parent: false} as ICategoryRequest)
    
    return (
        <>
            {(categories ?? []).map(it => (
                <DropdownCategory 
                    title={it.title} 
                    items={it.children ?? []} 
                    key={it.id} />
            ))}
        </>
    )
}
