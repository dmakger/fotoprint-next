import { ICharacteristic, ICharacteristicGroupToCharacteristic } from "@/entities/Metric/model/characteristic.metric.model";
import { IProductCharacteristicCombination } from "../model/product.model"


/**
 * Перевод `IProductCharacteristicCombination` в  `ICharacteristicGroupToCharacteristic`  
 * Используется для отрисовки Характеристик у товара
 */
export const formattedCombinationProductList = (data: IProductCharacteristicCombination[], activeId?: number) => {
    return data.reduce((acc: ICharacteristicGroupToCharacteristic[], item: IProductCharacteristicCombination) => {
        item.characteristics.forEach((_char, index) => {
            const char: ICharacteristic = {..._char, isActive: activeId === item.id}
            if (index >= acc.length)
                acc.push({
                    characteristicGroup: char.characteristicGroup,
                    characteristics: [char]
                })
            else if (
                acc[index].characteristicGroup.id === char.characteristicGroup.id 
                && !acc[index].characteristics.some(it => it.id === char.id)
            ) {
                acc[index].characteristics.push(char)
            }
        })
        return acc;
      }, []);
      
}
