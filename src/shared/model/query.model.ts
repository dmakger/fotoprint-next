import { Dispatch, ReactNode, SetStateAction } from "react";
import { ListDirection } from "../data/list.data";

export interface IQueryResponse {
    count: number,
    countPage: number
}


/**
 * Необходим для реализаций сущностей (`QueryProduct`)
 */
export interface IQueryProps extends IQueryCore {
    direction?: ListDirection;
}


export interface IQuery extends IQueryCore{
    countPage?: number
    setPageNumber: Dispatch<SetStateAction<number>>
    setLimit: Dispatch<SetStateAction<number>>
    setSearch: Dispatch<SetStateAction<string | undefined>>
    children?: ReactNode
}


/**
 * Необходим для реализаций сущностей (`QueryProduct`)
 */
export interface IQueryCore {
    hasPagination?: boolean;
    baseLink?: string
}