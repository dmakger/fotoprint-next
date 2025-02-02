import Link from 'next/link';

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Shelf.module.scss'

import { IShelf } from "../model/shelf.model";
import { Button, ButtonVariant } from "../../Button";
import { Slider } from "../../Slider/Slider";
import { WrapperBlock } from '../../Wrapper/Block/ui/WrapperBlock';
import { ButtonColor, ButtonSize } from '../../Button/data/button.data';


interface ShelfProps<T> extends IShelf<T>{}

export const Shelf = <T extends any>({
    title,
    href,
    hrefTitle,

    sliderParams,
    
    className,
    classNameTitle
}: ShelfProps<T>) => {
    return (
        <WrapperBlock className={cls(cl.shelf, className)} classNameContent={cls(cl.shelfContent, className)}>
            <div className={cl.header}>
                <h2 className={cls(cl.title, href ? cl.isLink : '', classNameTitle)}>
                    {href ? (
                        <Link href={href} className={cl.titleLink}>{title}</Link>
                    ) : (
                        <>{title}</>
                    )}
                </h2>
                {href && (
                    <Button href={href} 
                            title={hrefTitle ?? "Посмотреть"}
                            variant={ButtonVariant.Content}
                            size={ButtonSize.Small} 
                            color={ButtonColor.Tertiary}  
                            classNameLink={cl.show}/>
                )}
            </div>
            <Slider {...sliderParams}
                    gap={sliderParams.gap ?? 10} />
        </WrapperBlock>
    )
}
