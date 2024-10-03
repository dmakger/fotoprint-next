import { ICategory } from "@/entities/Metric/model/category.metric.model"
import { ICombination } from "@/entities/Metric/model/characteristic.metric.model"
import { IExecutionTime } from "@/entities/Metric/model/executionTime.metric.model"

/**
 * Модель `Продукта`
 */
export interface IProduct {
    id: number
    title: string
    price: 160.0,
    image: string | null,
    images: string[],
    parentId: number,
    category: ICategory
    executionTime: IExecutionTime
}


/**
 * Модель `Характеристик у комбинаций Продукта`
 */
export interface IProductCharacteristicCombination {
    id: number
    price: number
    image: string | null
    combinations: ICombination[][]
    execution_time: number
}
