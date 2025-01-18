import { IOption } from "@/shared/model/option.model"


/**
 * Интерфейс для реализации выпадающего списка  
 * **Версия для реализации**
 */
export interface IDropdown extends IDropdownBase {
    title: string
    items: IOption[]
}



/**
 * Интерфейс для реализации выпадающего списка  
 * **Версия для переиспользования**
 */
export interface IDropdownTop<T> extends IDropdownBase {
    title?: string
    items: T[]
}


/**
 * Интерфейс для реализации выпадающего списка  
 * **Версия для наследования**
 */
export interface IDropdownBase {
    className?: string
}