import { cls } from '@/shared/lib/classes.lib';
import cl from './_Shelf.module.scss'

import { IShelf } from "../model/shelf.model";
import { Button } from "../../Button";
import { Slider } from "../../Slider/Slider";

interface ShelfProps<T> extends IShelf<T>{
}

export const Shelf = <T extends any>({
    title,
    href,
    hrefTitle,

    sliderParams,
    
    className,
    classNameTitle,
    ...rest
}: ShelfProps<T>) => {
    return (
        <div className={cls(cl.shelf, className)}>
            <div className={cl.header}>
                <h2 className={cls(cl.title, classNameTitle)}>{title}</h2>
                {href && (
                    <Button href={href} title={hrefTitle ?? "Посмотреть всё"} />
                )}
            </div>
            <Slider {...sliderParams} />
        </div>
    )
}
