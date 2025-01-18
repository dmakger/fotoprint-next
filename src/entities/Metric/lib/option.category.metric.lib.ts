import { IOption } from "@/shared/model/option.model";
import { ICategory } from "../model/category.metric.model";


/**
 * Перевод списка категорий в список option
 * @param categories - Список категорий
 */
export const categoryListToOptionList = (categories: ICategory[]) => {
    return categories.map(category => categoryToOption(category))
}


/**
 * Перевод категории в option
 * @param category - Передоваемая категория
 */
export const categoryToOption = (category: ICategory) => {
    const {id, title, ...params} = category
    return {id, title, params} as IOption
}