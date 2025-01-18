'use client'

import { BACKEND_PARAMS } from "@/config/params/backend.params.config"
import { ISuspenseLItem } from "@/entities/Product/model/suspenseL.model"
import { DefaultBackendParams } from "@/shared/data/params.data"
import { useSearchParams } from "next/navigation"
import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from "react"

interface SuspenseLQueryProps {
    pageNumber?: string
    setPageNumber: Dispatch<SetStateAction<number>>
    defaultPageNumber?: number
    
    limit?: string
    setLimit: Dispatch<SetStateAction<number>>
    defaultLimit?: number

    search?: string
    setSearch: Dispatch<SetStateAction<string | undefined>>
    defaultSearch?: string
    
    data?: ISuspenseLItem[]
    children: ReactNode
}

export const SuspenseLQuery:FC<SuspenseLQueryProps> = ({
    pageNumber=BACKEND_PARAMS.Page, setPageNumber, defaultPageNumber=DefaultBackendParams.Page,
    limit=BACKEND_PARAMS.Limit, setLimit, defaultLimit=DefaultBackendParams.Limit,
    search=BACKEND_PARAMS.Search, setSearch, defaultSearch,
    data, children
}) => {
    // ROUTE
    const searchParams = useSearchParams();

    // PAGE NUMBER
    useEffect(() => {
        const value = searchParams.get(pageNumber) ?? defaultPageNumber
        setPageNumber(typeof value === "string" ? +value : value)
    }, [searchParams, pageNumber, setPageNumber, defaultPageNumber])

    // LIMIT
    useEffect(() => {
        const value = searchParams.get(limit) ?? defaultLimit
        setLimit(typeof value === "string" ? +value : value)
    }, [searchParams, limit, setLimit, defaultLimit])

    // SEARCH
    useEffect(() => {
        const value = searchParams.get(search) ?? defaultSearch
        setSearch(value)
    }, [searchParams, search, setSearch, defaultSearch])

    // DATA
    useEffect(() => {
        if (!data) return

        data.forEach(({searchKey, set, defaultValue}) => {
            const value = searchParams.get(searchKey) ?? defaultValue ?? null
            set(value)
        })
    }, [data])

    
    return children
}
