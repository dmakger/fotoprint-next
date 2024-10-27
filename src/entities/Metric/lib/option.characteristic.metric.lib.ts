import { IOption } from "@/shared/model/option.model"
import { ICombination } from "../model/characteristic.metric.model"


/**
 * Перевод списка комбинаций в список `IOption`
 * @param objs - Список комбинаций
 */
export const combinationListToOptionList = (objs: ICombination[]) => {
    return objs.map(obj => combinationToOption(obj))
}


/**
 * Перевод комбинации в `IOption`
 * @param obj - Передоваемая комбинация
 */
export const combinationToOption = (obj: ICombination) => {
    const {id, ...params} = obj
    return {
        id, 
        title: params.characteristic.title,
        other: params
    } as IOption
}