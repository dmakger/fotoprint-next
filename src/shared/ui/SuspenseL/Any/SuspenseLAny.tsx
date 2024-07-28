'use client'

import { ISuspenseLItem } from "@/entities/Product/model/suspenseL.model"
import { useSearchParams } from "next/navigation"
import { FC, ReactNode, useEffect } from "react"

interface SuspenseLAnyProps{
    data: ISuspenseLItem[]
    children: ReactNode
}

export const SuspenseLAny:FC<SuspenseLAnyProps> = ({data, children}) => {
    const searchParams = useSearchParams();

    useEffect(() => {
        data.forEach(({searchKey, set, defaultValue}) => {
            const value = searchParams.get(searchKey) ?? defaultValue ?? null
            set(value)
        })
    }, [data])

    
    return children
}
