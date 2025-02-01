import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ButtonArrow.module.scss';

import { Button } from "../../ui/Button";
import { ButtonVariant } from "../../data/button.data";
import { IImageSize } from "@/shared/model/image.model";
import { ListDirection } from "@/shared/data/list.data";
import { Axis } from "@/shared/data/axis.data";
import { ARROW__BLACK__ICON } from "@/shared/data/icon/arrow.data.icon";
import { IButton } from "../../model/button.model";

interface ButtonArrowProps extends IButton {
    isSecondary?: boolean
    axis?: Axis
    direction?: ListDirection
    sizes?: IImageSize,
    onClick?: IButton['onClick']
    className?: string,
}

export const ButtonArrow:FC<ButtonArrowProps> = ({
    isSecondary=true, 
    axis, direction=ListDirection.Row,
    onClick, sizes, 
    className, ...rest
}) => {
    return (
        <Button afterImage={ARROW__BLACK__ICON} afterProps={{axis, width: sizes?.width, height: sizes?.height}} 
                variant={ButtonVariant.Default} onClick={onClick}
                className={cls(cl.button, cl[direction], axis ? cl[axis] : '', className)} 
                {...rest}/>
    )
}
