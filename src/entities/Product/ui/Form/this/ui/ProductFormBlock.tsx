"use client"

import { Dispatch, FC, SetStateAction, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductFormBlock.module.scss'
import { ICharacteristicForm, IProductForm } from "@/entities/Product/model/form.product.model";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/model/button.model";
import { ProductForm } from "../components/Form/ProductForm";
import { WrapperBlock } from "@/shared/ui/Wrapper/Block/ui/WrapperBlock";
import { IOption } from "@/shared/model/option.model";
import { createOption } from "@/shared/lib/option/create.option.lib";
import { OptionList } from "@/shared/ui/Option/List/OptionList";
import { OptionItem } from "@/shared/ui/Option/Item/OptionItem";
import { OptionVariant } from "@/shared/data/option.data";
import { ListDirection } from "@/shared/data/list.data";
import { TListItemOnClick } from "@/shared/model/list.model";

interface ProductFormBlockProps {
    productForm: IProductForm
    onlyUnique?: boolean
    setPrice?: Dispatch<SetStateAction<number>>
    className?: string,
}

export const ProductFormBlock:FC<ProductFormBlockProps> = ({
    productForm,
    onlyUnique=false, 
    setPrice,
    className,
}) => {
    // STATE
    const [showForm, setShowForm] = useState(false)
    // const [addedList, setAddedList] = useState<ICharacteristicForm[][]>([])
    const [addedOptionList, setAddedOptionList] = useState<IOption[]>([])
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    // HANDLE
    const handleOnClickAdd = () => {
        setShowForm(true)
    }

    const handleOnSubmit = (items: ICharacteristicForm[]) => {
        setShowForm(false)
        if (items.length === 0)
            return

        // setAddedList(prev => [...prev, items])
        setAddedOptionList(prev => {
            const price = items[items.length-1].form?.price ?? 0
            const newOption = createOption({
                title: items.map(it => it.title).join(' | '),
                other: items,
                params: { price }
            })
            if (onlyUnique) {
                if (prev.find(it => it.title === newOption.title)){
                    setErrorMessage(`Вы уже добавили такой же "${newOption.title}"`)
                    return prev
                } else {
                    setErrorMessage(null)
                }
            }

            console.log('qwe items', items)
            if(setPrice)
                setPrice(prev => prev + price)
            return [...prev, newOption]
        })
    }

    const handleOnClickDeleteItem: TListItemOnClick<IOption> = (_, index) => {
        if (index === undefined)
            return

        // setAddedList(prev => prev.filter((_, idx) => idx !== index))
        setAddedOptionList(prev => {
            const price = parseFloat(`${prev[index].params?.price ?? 0}`)
            if (setPrice) {
                setPrice(prevPrice => prevPrice - price)
            }
            return prev.filter((_, idx) => idx !== index)
        })
    }

    return (
        <WrapperBlock title={productForm.title} classNameContent={cls(cl.wrapper, className)}>
            {addedOptionList.length > 0 && (
                <OptionList 
                    items={addedOptionList} 
                    gap={10}
                    direction={ListDirection.Wrap}
                    variant={OptionVariant.WDelete} 
                    onClickDelete={handleOnClickDeleteItem}/>            
            )}
            {showForm ? (
                <ProductForm forms={productForm.forms} onClick={handleOnSubmit} />
            ) : (
                <Button title="Добавить"
                    color={ButtonColor.Tertiary}
                    variant={ButtonVariant.BORDER} 
                    size={ButtonSize.Medium} 
                    isRounded={false}
                    onClick={handleOnClickAdd}
                    className={cl.buttonAdd}/>
            )}

            {errorMessage && (
                <span className={cl.errorMessage}>{errorMessage}</span>
            )}
            
        </WrapperBlock>
    )
}
