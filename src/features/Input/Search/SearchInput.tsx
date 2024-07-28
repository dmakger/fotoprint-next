"use client"

import { FC, FormEvent, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SearchInput.module.scss'
import { Button } from "@/shared/ui/Button";
import { ButtonSize, ButtonType } from "@/shared/ui/Button/model/button.model";
import Input from "@/shared/ui/Input/Input";
import { SEARCH_WHITE__ICON } from "@/shared/data/icon/search.data.icon";
import { MAIN_PAGES } from "@/config/pages-url.config";
import { BACKEND_PARAMS } from "@/config/params/backend.params.config";

interface SearchInputProps{
    className?: string,
}

export const SearchInput:FC<SearchInputProps> = ({className}) => {
    // ROUTER
    const router = useRouter()
    const searchParams = useSearchParams() 

    // STATE
    const [defaultSearchValue, setDefaultSearchValue] = useState<string>()

    // HANDLE
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchValue = e.currentTarget.search.value;
        const params = new URLSearchParams(searchParams.toString())
        params.set(BACKEND_PARAMS.SEARCH, searchValue)
        if (!searchValue)
            params.delete(BACKEND_PARAMS.SEARCH)
        router.push(`${MAIN_PAGES.CATALOG}?${params.toString()}`);    
    };

    // EFFECT
    useEffect(() => {
        const searchValue = searchParams.get(BACKEND_PARAMS.SEARCH)
        if (searchValue)
            setDefaultSearchValue(searchValue)
    }, [searchParams])

    return (
        <form className={cl.search} onSubmit={handleOnSubmit}>
            <Input.Text name={'search'} 
                        placeholder="Поиск..." 
                        defaultValue={defaultSearchValue} className={cl.text} />
            <div className={cl.right}>
                <Button type={ButtonType.Submit} size={ButtonSize.Small}
                        beforeImage={SEARCH_WHITE__ICON} beforeProps={{width: 20, height: 20}} />
            </div>
        </form>
    )
}