import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductFormBlock.module.scss'
import { IProductForm } from "@/entities/Product/model/form.product.model";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/model/button.model";
import { ProductForm } from "../components/Form/ProductForm";
import { WrapperBlock } from "@/shared/ui/Wrapper/Block/ui/WrapperBlock";

interface ProductFormBlockProps {
    productForm: IProductForm
    className?: string,
}

export const ProductFormBlock:FC<ProductFormBlockProps> = ({productForm, className}) => {
    return (
        <WrapperBlock title={productForm.title} className={cls(className)}>
            <Button title="Добавить"
                    color={ButtonColor.Tertiary}
                    variant={ButtonVariant.BORDER} 
                    size={ButtonSize.Medium} 
                    isRounded={false}
                    className={cl.buttonAdd}/>
            <ProductForm forms={productForm.forms} />
        </WrapperBlock>
    )
}
