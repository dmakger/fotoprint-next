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
    isActive?: boolean
}


/**
 * `Группа характеристик` к списку `Характеристик`
 */
export interface ICharacteristicGroupToCharacteristic {
    characteristicGroup: ICharacteristicGroup
    characteristics: ICharacteristic[]
}