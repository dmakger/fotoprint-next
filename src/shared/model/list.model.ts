import { Dispatch, SetStateAction } from "react";
import { ListDirection } from "../data/list.data";
import { TAnyParams } from "./params.model";


/**
 * Интерфейс необходимый для реализации списка без учета `ListItem`.  
 */
export interface IListBase<T> extends TAnyParams {
    isLoading?: boolean
    loadingProps?: IListLoadingProps
    componentLoading?: React.FC<TAnyParams>;

    items?: T[];
    direction?: ListDirection;
    gap?: number
    
    activeId?: number | string
    activeIndex?: number
    setActiveIndex?: Dispatch<SetStateAction<number>> | Dispatch<SetStateAction<number | undefined>>

    listRef?: React.RefObject<HTMLDivElement>
    generateKey?: (it: T, index?: number) => number | string
    isScrollToTopNeeded?: boolean

    className?: string;
    classNameItem?: string;
}


/**
 * Интерфейс необходимый для реализации элементов для списка `IListBase`.
 */
export interface IListBaseOnlyItem<T> {
    componentProps?: TAnyParams;
    onClickItem?: TListItemOnClick<T>
    onClickDelete?: TListItemOnClick<T>
    classNameItem?: string;
}


/**
 * Объединение `IListBase` и `IListBaseOnlyItem`.    
 * Отличается от `IList` отсутствием поля `component`
 */
export interface IListTop<T> extends IListBase<T>, IListBaseOnlyItem<T> {}

/**
 * Интерфейс необходимый для реализации списка.  
 */
export interface IList<T> extends IListTop<T> {
    component: React.FC<IListItem<T>>;
}


/**
 * Интерфейс необходимый для реализации элемента списка.  
 * Применяется в интерфейсе `IList`
 */
export interface IListItem<T> extends TAnyParams {
    item: T,
    activeId?: number | string
    isActive?: boolean
    // onClick?: TListItemOnClick<T>
    onClick?: Function
    onClickDelete?: Function
    style?: object
    className?: string,
}

/**
 * Функция нажатия на `ListItem`
 */
export type TListItemOnClick<T> = (it: T, index?: number) => void


/**
 * Пропсы для списка загрузки 
 */
export interface IListLoadingProps {
    length: number
    className?: string
}