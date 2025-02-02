"use client"

import { FC, useEffect, useState } from "react"

import { IQuery } from "@/shared/model/query.model";
import { Pagination } from "../../Pagination/ui/Pagination";
import SuspenseL from "../../SuspenseL/SuspenseL";
import { DefaultBackendParams } from "@/shared/data/params.data";

interface QueryProps extends IQuery {}

export const Query:FC<QueryProps> = ({
    countPage,
    setPageNumber: setOutPageNumber,
    setLimit,
    setSearch,

    hasPagination,
    baseLink,

    children
}) => {
    // STATE
    const [pageNumber, setPageNumber] = useState<number>(DefaultBackendParams.Page)

    // EFFECT
    useEffect(() => {
        setOutPageNumber(pageNumber)
    }, [pageNumber])

    return (
        <SuspenseL>
            <SuspenseL.Query setPageNumber={setPageNumber} setLimit={setLimit} setSearch={setSearch}>
                {children}
                {(hasPagination && baseLink) && (
                    <Pagination baseLink={baseLink} 
                                pageNumber={pageNumber} 
                                amount={countPage} />
                )}
            </SuspenseL.Query>
        </SuspenseL>
    )
}
