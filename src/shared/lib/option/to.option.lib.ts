import { IOption } from "@/shared/model/option.model";
import { generateId } from "../generateId.lib";

/**
 * Перевод `IOption` в тип который указываешь при вызове функции  
 * 
 * ```ts
 * // Пример вызова 
 * fromOptionToType<ICurrency>(option)
 * ```
 */
export const fromOptionToType = <T>(opt: IOption): T => {
    const {id, title, params} = opt
    return {id, title, ...params} as T
}
