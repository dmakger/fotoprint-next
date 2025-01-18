"use client"
import { FC } from "react"

import { AccordionCategory } from "@/features/Accordion/Category/AccordionCategory"
import { CategoryAPI } from "@/entities/Metric/api/category.api"
import { ICategoryRequest } from "@/entities/Metric/model/props.category.metric.model"

interface ParentCategoryAccordingProps{
    className?: string,
}

export const ParentCategoryAccording:FC<ParentCategoryAccordingProps> = ({className}) => {
    // API
    const {data: categories, isLoading} = CategoryAPI.useGetCategoriesQuery({
        only_parent: false
    } as ICategoryRequest)

    
    return (
        <AccordionCategory 
            items={categories ?? []}
            listProps={{
                isLoading
            }} />
    )
}
