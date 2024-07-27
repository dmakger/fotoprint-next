/**
 * Модель `Группа Характеристик`
 */
export interface ICharacteristicGroup {
    id: number
    title: string
}


/**
 * Модель `Характеристики`
 */
export interface ICharacteristic {
    id: number
    title: string
    characteristicGroup: ICharacteristicGroup
    description?: string
}