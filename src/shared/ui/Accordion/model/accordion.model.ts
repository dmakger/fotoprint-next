import { IList, IListTop } from "@/shared/model/list.model"
import { IOption } from "@/shared/model/option.model"


export interface IAccordionTop<T> {
    title?: string
    items: T[]
    listProps?: IListTop<T>
    className?: string
}


export interface IAccordion extends IAccordionTop<IOption> {
    title: string,
    items: IOption[]
    listProps?: IListTop<IOption>
}