import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_OptionItem.module.scss'
import { IListItem } from "@/shared/model/list.model";
import { IOption } from "@/shared/model/option.model";
import { OptionVariant } from "@/shared/data/option.data";
import { Button, ButtonVariant } from "../../Button";
import { TRASH__ICON } from "@/shared/data/icon/trash.data.icon";
import { ButtonColor, ButtonSize } from "../../Button/model/button.model";

interface OptionItemProps extends IListItem<IOption> {
    variant?: OptionVariant
    onClickDelete?: Function
}

export const OptionItem:FC<OptionItemProps> = ({
    variant=OptionVariant.Simple,
    onClickDelete,
    
    item,
    isActive,
    onClick,
    className,
}) => {

    // HANDLE
    const handleOnClick = () => {
        if (onClick)
            onClick()
    }

    // HTML
    const html = (
        <div className={cls(cl.option, cl[variant])}>
            <div className={cls(isActive ? cl.active : '', cl.block, className)}>
                <span className={cl.title}>{item.title}</span>
            </div>

            {variant === OptionVariant.WDelete && onClickDelete && (
                <div className={cl.wrapperDelete}>
                    <Button variant={ButtonVariant.FILL}
                            size={ButtonSize.Small}
                            color={ButtonColor.Tertiary}
                            beforeImage={TRASH__ICON} beforeProps={{width: 20, height: 20}}
                            onClick={onClickDelete}
                            className={cl.buttonDelete} />
                </div>
            )}
        </div>
    )

    if (!onClick) 
        return html

    return (
        <button onClick={handleOnClick}>
            {html}
        </button>
    )
}
