"use client"

import { FC, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import cl from './_Pagination.module.scss';

import { HandleSize } from "../../Handle/Size/HandleSize";
import { BACKEND_PARAMS } from "@/config/params/backend.params.config";
import { PaginationBody } from "../components/Body/ui/PaginationBody";

interface PaginationProps {
    baseLink: string
    pageNumber: number
    amount?: number
    className?: string,
}

export const Pagination:FC<PaginationProps> = ({
    baseLink,
    pageNumber,
    amount = 1,
    className,
}) => {
        // ROUTER
        const router = useRouter()
        const searchParams = useSearchParams();
    
        // STATE
        const [amountCore, setAmountCore] = useState(1)
        const [amountContent, setAmountContent] = useState(9)
        const [is768, setIs768] = useState(false)

        // EFFECT
        useEffect(() => {
            if (amountCore !== amount)
                setAmountCore(amount)
        }, [amount])
    
        useEffect(() => {
            let newAmountContent = is768 ? 4 : 9
            if (newAmountContent !== amountContent)
                setAmountContent(newAmountContent)
        }, [is768])
    
        // ON CLICK
        const handleOnClickItem = (n: number) => {     
            const params = new URLSearchParams(searchParams.toString())
            params.set(BACKEND_PARAMS.Page, `${n}`)
            router.push(`${baseLink}?${params.toString()}`);    
        }
    
        return (
            <>
                {amountCore > 1 &&
                    <PaginationBody active={pageNumber} 
                                    amount={amountCore} amountContent={amountContent} 
                                    onClickItem={handleOnClickItem} 
                                    className={cl.pagination} />
                }
                <HandleSize width={768} set={setIs768}/>
            </>
        )
    
}
