/**
 * Модель `Категории`
 */
export interface ICategory {
    id: number
    title: string
    children?: ICategory[]
}