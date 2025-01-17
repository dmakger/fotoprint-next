import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductSkeleton.module.scss'
import Skeleton from "@/shared/ui/Skeleton/Skeleton";

interface ProductSkeletonProps{
    className?: string,
}

export const ProductSkeleton:FC<ProductSkeletonProps> = ({className}) => {
    return (
        <div className={cls(cl.product, className)}>
            <Skeleton className={cl.image} />

            <div className={cl.bottom}>
                <Skeleton width="100%" height="20px"  />

                <Skeleton width="40%" height="16px" className={cl.executionTime} />

                <div className={cl.priceWrapper}>
                    <Skeleton width="55px" height="31px" radius="10px" />
                </div>
            </div>
        </div>
    )
}
