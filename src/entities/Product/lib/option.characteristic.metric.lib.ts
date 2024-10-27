import { IOption } from "@/shared/model/option.model"
import { ICharacteristicForm } from "../model/form.product.model"

/**
 * Перевод списка комбинаций в список `IOption`
 * @param objs - Список комбинаций
 */
export const characteristicFormListToOptionList = (objs: ICharacteristicForm[]) => {
    return objs.map(obj => characteristicFormToOption(obj))
}


/**
 * Перевод комбинации в `IOption`
 * @param obj - Передоваемая комбинация
 */
export const characteristicFormToOption = (obj: ICharacteristicForm) => {
    const {id, title, ...params} = obj
    return { id, title, other: params } as IOption
}