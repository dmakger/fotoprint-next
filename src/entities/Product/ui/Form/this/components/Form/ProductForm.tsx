import { FC, useEffect, useState } from "react";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductForm.module.scss';
import { ICharacteristicForm } from "@/entities/Product/model/form.product.model";
import { CharacteristicFormList } from "@/entities/Product/ui/CharacteristicForm/List/CharacteristicFormList";
import { TListItemOnClick } from "@/shared/model/list.model";
import { WrapperBlock } from "@/shared/ui/Wrapper/Block/ui/WrapperBlock";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/data/button.data";

interface ProductFormProps {
    forms: ICharacteristicForm[];
    onClick?: Function
    className?: string;
}

export const ProductForm: FC<ProductFormProps> = ({ forms, onClick, className }) => {
    // STATE
    const [selectedItems, setSelectedItems] = useState<ICharacteristicForm[]>([]);

    // EFFECT
    useEffect(() => {
        if (forms.length === 0) return;

        // Инициализируем первый выбранный элемент
        const initialSelectedItems: ICharacteristicForm[] = [];
        let currentForm: ICharacteristicForm | null = forms[0];

        while (currentForm) {
            initialSelectedItems.push(currentForm);
            currentForm = currentForm.children && currentForm.children.length > 0 ? currentForm.children[0] : null;
        }

        setSelectedItems(initialSelectedItems);
    }, [forms]);

    // HANDLE
    const handleOnClickItem: TListItemOnClick<ICharacteristicForm> = (item, level) => {
        const updatedSelectedItems = selectedItems.slice(0, level); // Срез до текущего уровня
        updatedSelectedItems.push(item); // Добавляем выбранный элемент на текущем уровне

        // Добавляем вложенные элементы, если они существуют
        let currentForm = item.children && item.children.length > 0 ? item.children[0] : null;
        while (currentForm) {
            updatedSelectedItems.push(currentForm);
            currentForm = currentForm.children && currentForm.children.length > 0 ? currentForm.children[0] : null;
        }

        setSelectedItems(updatedSelectedItems);
    };

    const handleOnClickAdd = () => {
        if (onClick)
            onClick(selectedItems)
    }

    return (
        <WrapperBlock className={cls(cl.productForm, className)} classNameContent={cl.content}>
            {selectedItems.map((_, level) => (
                <CharacteristicFormList
                    items={level === 0 ? forms : selectedItems[level - 1]?.children || []}
                    onClickItem={(item) => handleOnClickItem(item, level)}
                    activeId={selectedItems[level].id}
                    key={level}
                />
            ))}
            <Button title="Добавить"
                    color={ButtonColor.Primary}
                    variant={ButtonVariant.Fill} 
                    size={ButtonSize.Medium} 
                    isRounded={false}
                    onClick={handleOnClickAdd}
                    className={cl.buttonAdd}/>
        </WrapperBlock>
    );
};
