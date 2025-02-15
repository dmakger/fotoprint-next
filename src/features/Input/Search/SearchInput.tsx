"use client"

import { FC, FormEvent, useState } from "react"
import { useRouter } from "next/navigation";

import cl from './_SearchInput.module.scss'

import { Button } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize, ButtonType } from "@/shared/ui/Button/data/button.data";
import Input from "@/shared/ui/Input/Input";
import { SEARCH_WHITE_TO_BLACK__ICON } from "@/shared/data/icon/search.data.icon";
import { BACKEND_PARAMS } from "@/config/params/backend.params.config";
import SuspenseL from "@/shared/ui/SuspenseL/SuspenseL";
import { cls } from "@/shared/lib/classes.lib";

interface SearchInputProps{
    baseLink: string
    className?: string,
}

export const SearchInput:FC<SearchInputProps> = ({
    baseLink,
    className,
}) => {
    // ROUTER
    const router = useRouter()

    // STATE
    const [defaultSearchValue, setDefaultSearchValue] = useState<string | null>("")

    // HANDLE
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchValue = e.currentTarget.search.value;
        const params = new URLSearchParams()
        params.set(BACKEND_PARAMS.Search, searchValue)
        if (!searchValue)
            params.delete(BACKEND_PARAMS.Search)
        router.push(`${baseLink}?${params.toString()}`);    
    };

    return (
        <SuspenseL>
            <SuspenseL.Any data={[
                {searchKey: BACKEND_PARAMS.Search, set: setDefaultSearchValue, defaultValue: ""}
            ]}>
                <form className={cls(cl.search, className)} onSubmit={handleOnSubmit}>
                    <Input.Text name={'search'} 
                                placeholder="Поиск..." 
                                defaultValue={defaultSearchValue ?? undefined} className={cl.text} />
                    <div className={cl.right}>
                        <Button type={ButtonType.Submit} 
                                size={ButtonSize.Small}
                                color={ButtonColor.Secondary}
                                beforeImage={SEARCH_WHITE_TO_BLACK__ICON} 
                                beforeProps={{width: 20, height: 20}}
                                className={cl.button} />
                    </div>
                </form>
            </SuspenseL.Any>
        </SuspenseL>
    )
}