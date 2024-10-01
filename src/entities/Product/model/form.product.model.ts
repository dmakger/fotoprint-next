import { ICharacteristic } from "@/entities/Metric/model/characteristic.metric.model"
import { IExecutionTime } from "@/entities/Metric/model/executionTime.metric.model"

/**
 * Форма товара
 */
export interface IProductForm {
    id: number
    title: string
    forms: ICharacteristicForm[]
}


export interface ICharacteristicForm extends ICharacteristic {
    children?: ICharacteristicForm[],
    form?: IProductFormCharacteristics,
}

/**
 * Характеристики Форма товара
 */
export interface IProductFormCharacteristics {
    id: number
    price: number
    executionTime: IExecutionTime
}