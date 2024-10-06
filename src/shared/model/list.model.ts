import { Dispatch, SetStateAction } from "react";
import { ListDirection } from "../data/list.data";
import { TAnyParams } from "./params.model";


/**
 * Интерфейс необходимый для реализации списка без учета `ListItem`.  
 */
export interface IListBase<T> extends TAnyParams {
    items: T[];
    activeId?: number | string
    activeIndex?: number
    setActiveIndex?: Dispatch<SetStateAction<number>> | Dispatch<SetStateAction<number | undefined>>
    listRef?: React.RefObject<HTMLDivElement>
    generateKey?: (it: T, index?: number) => number | string
    direction?: ListDirection;
    gap?: number
    className?: string;
}


/**
 * Интерфейс необходимый для реализации элементов для списка `IListBase`.
 */
export interface IListBaseOnlyItem<T> {
    componentProps?: TAnyParams;
    onClickItem?: TListItemOnClick<T>
    classNameItem?: string;
}



/**
 * Объединение `IListBase` и `IListBaseOnlyItem`.    
 * Отличается от `IList` отсутствием поля `component`
 */
export interface IListTopLevel<T> extends IListBase<T>, IListBaseOnlyItem<T> {}

/**
 * Интерфейс необходимый для реализации списка.  
 */
export interface IList<T> extends IListTopLevel<T> {
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
    style?: object
    className?: string,
}

/**
 * Функция нажатия на `ListItem`
 */
export type TListItemOnClick<T> = (it: T, index?: number) => void
