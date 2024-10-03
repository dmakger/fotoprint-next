import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ImageProduction.module.scss'
import { ImageAPI } from "../../API/ImageAPI";
import { ImageProductionColor, ImageProductionVariant } from "../data/production.image.data";
import { Button, ButtonVariant } from "@/shared/ui/Button";

interface ImageProductionProps {
    src: string
    variant?: ImageProductionVariant
    color?: ImageProductionColor
    width?: number
    height?: number
    isActive?: boolean
    onClick?: Function
    className?: string,
    classNameImage?: string,
}

export const ImageProduction:FC<ImageProductionProps> = ({
    src, 
    variant=ImageProductionVariant.GrayToImage, color=ImageProductionColor.Empty,
    width, height,
    isActive=false, 
    onClick, 
    className, classNameImage
}) => {
    const html = (
        <div className={cls(cl.wrapper, cl[variant], cl[color], isActive ? cl.active : '', className)}>
            {/* <div className={cl.foreground} /> */}
            <ImageAPI src={src} width={width} height={height} className={cls(cl.image, classNameImage)} />
        </div>
    )
    if (!onClick)
        return html

    return (
        <Button onClick={onClick}>
            {html}
        </Button>
    )
}
