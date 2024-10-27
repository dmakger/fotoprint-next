import { TParams } from "./params.model"

export interface IOption extends IOptionWOId {
    id: number
}

export interface IOptionWOId {
    id?: number
    title: string
    value?: string | number
    options?: IOption[]
    params?: TParams
    other?: object
}
