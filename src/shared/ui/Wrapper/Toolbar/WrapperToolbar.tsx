import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperToolbar.module.scss'

import { SearchInput } from "@/features/Input/Search/SearchInput";
import { TagAll } from "@/shared/data/tag.data";
import { SmartTitle } from "../../SmartTitle/ui/SmartTitle";
import Wrapper1280 from "../../Wrapper/1280/Wrapper1280";

interface WrapperToolbarProps{
    title?: string;
    children?: ReactNode
    className?: string,
}

export const WrapperToolbar:FC<WrapperToolbarProps> = ({
    title,
    children, 
    className,
}) => {
    // !TODO : Add filters (https://periodica.press/products/photobooks/)

    return (
        <div className={cls(cl.content, className)}>
            <div className={cl.top}>
                <SmartTitle defaultTitle={title ?? "Каталог"}
                            config={{
                                search: true
                            }} />
                <SearchInput />
                {/* <ParentCategoryListDropdown /> */}
                {/* <ModalFilter /> */}
                {/* <ParentCategoryList /> */}
            </div>
            {children}
        </div>
    )
}
