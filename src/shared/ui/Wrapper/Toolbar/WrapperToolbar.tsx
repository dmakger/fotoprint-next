import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperToolbar.module.scss'

import { SearchInput } from "@/features/Input/Search/SearchInput";
import { SmartTitle } from "../../SmartTitle/ui/SmartTitle";

interface WrapperToolbarProps{
    title: string;
    searchLink: string;
    children?: ReactNode
    className?: string,
}

export const WrapperToolbar:FC<WrapperToolbarProps> = ({
    title,
    searchLink,
    children, 
    className,
}) => {
    // !TODO : Add filters (https://periodica.press/products/photobooks/)

    return (
        <div className={cls(cl.content, className)}>
            <div className={cl.top}>
                <SmartTitle defaultTitle={title}
                            config={{
                                search: true
                            }} />
                <SearchInput baseLink={searchLink} />
                {/* <ParentCategoryListDropdown /> */}
                {/* <ModalFilter /> */}
                {/* <ParentCategoryList /> */}
            </div>
            {children}
        </div>
    )
}
