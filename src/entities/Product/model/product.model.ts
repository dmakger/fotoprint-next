import { ICategory } from "@/entities/Metric/model/category.metric.model"
import { ICharacteristic } from "@/entities/Metric/model/characteristic.metric.model"
import { IExecutionTime } from "@/entities/Metric/model/executionTime.metric.model"

/**
 * Модель `Продукта`
 */
export interface IProduct {
    id: number
    title: string
    price: 160.0,
    image: string | null,
    parentId: number,
    category: ICategory
    executionTime: IExecutionTime
}


export interface IProductFormCharacteristics {
    id: number
    characteristics: ICharacteristic[]
    executionTime: IExecutionTime
}



export interface IProductForm {
    id: number
    title: string
    combinations: IProductFormCharacteristics[]
}


export interface IProductCharacteristicCombination {
    id: number
    price: number
    characteristics: ICharacteristic[]
    forms: IProductForm[]
    execution_time: number
}