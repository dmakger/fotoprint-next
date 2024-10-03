'use client'
import React, {ReactNode, RefObject, useEffect, useState} from 'react'
import cl from './_Button.module.scss'
import { ButtonVariant } from '..'
import Link from 'next/link'
import { cls } from '@/shared/lib/classes.lib'
import { ButtonColor, ButtonSize, ButtonType } from '../model/button.model'
import { ButtonImageSize } from '../data/button.data'
import { getImageSizeBySize } from '../lib/button.lib'
import { IIcon, IIconProps } from '@/shared/model/icon.model'
import { ImageSmart } from '../../Image/ui/Smart/ImageSmart'

export interface IButton {
    variant?: ButtonVariant
    color?: ButtonColor
    type?: ButtonType
    size?: ButtonSize
    isRounded?: boolean

    ref?: RefObject<HTMLButtonElement>

    title?: string,
    href?: string

    beforeImage?: IIcon
    beforeProps?: IIconProps
    afterImage?: IIcon
    afterProps?: IIconProps
    
    active?: boolean
    success?: boolean,
    disabled?: boolean
    hovered?: boolean
    loading?: boolean
    noTranslation?: boolean

    onClick?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function

    children?: ReactNode
    className?: string
    classNameLink?: string
    classNameText?: string
    classNameTextHovered?: string
    classNameTextPressed?: string
    classNameTextDisabled?: string
}

export const Button = ({
    variant = ButtonVariant.FILL, color=ButtonColor.Primary, type = ButtonType.Button, size=ButtonSize.DefaultSize, isRounded=true,
    ref,
    title, href,
    beforeImage, beforeProps, afterImage, afterProps, 
    active=false, success=false, disabled=false, hovered, loading=false, noTranslation=false,
    onClick=()=>{}, onMouseEnter=()=>{}, onMouseLeave=()=>{},
    children, className, classNameLink, 
    classNameText, classNameTextHovered, classNameTextPressed, classNameTextDisabled,
}: IButton) => {
    // STATE
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isPressed, setIsPressed] = useState<boolean>(false)
    const [sizeImage, setSizeImage] = useState<ButtonImageSize>(ButtonImageSize.DefaultSize)

    // HANDLE
    const handleOnMouseEnter = () => {
        setIsHovered(true)
        onMouseEnter()
    }
    const handleOnMouseLeave = () => {
        setIsHovered(false)
        setIsPressed(false)
        onMouseLeave()
    }
    
    const handleOnMouseDown = () => {
        setIsPressed(true)
        setIsHovered(true)
    }
    const handleOnMouseUp = () => {
        setIsPressed(false)
        setIsHovered(true)
    }
    
    // EFFECT
    useEffect(() => {
        setSizeImage(getImageSizeBySize(size))
    }, [size])

    useEffect(() => {
        if (hovered !== undefined)
            setIsHovered(hovered)
    }, [hovered])

    const html =  (
        <button type={type} ref={ref} disabled={disabled || loading} 
                onClick={e => onClick(e)} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} 
                onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}
                className={cls(
                    cl.button, 
                    cl[variant], cl[color], cl[size],
                    isRounded ? cl.rounded : '', 
                    active ? cl.active : '', 
                    className
                )}>
            {beforeImage &&
                <ImageSmart {...beforeProps} icon={beforeImage} 
                            width={beforeProps && beforeProps.width ? beforeProps.width: sizeImage} 
                            height={beforeProps && beforeProps.height ? beforeProps.height: sizeImage} 
                            isActive={active} isHovered={isHovered} isSuccess={success} isPressed={isPressed} isDisabled={disabled}/>

            }
            {title && 
                <span className={cls(
                    cl.title, classNameText,
                    isHovered ? classNameTextHovered : '',
                    isPressed ? classNameTextPressed : '',
                    disabled ? classNameTextDisabled : '',
                )}>{title}</span>
            }
            {afterImage &&
                <ImageSmart {...afterProps} icon={afterImage}
                            width={afterProps && afterProps.width ? afterProps.width: sizeImage} 
                            height={afterProps && afterProps.height ? afterProps.height: sizeImage} 
                            isActive={active && !success} isHovered={isHovered} isSuccess={success} isPressed={isPressed} isDisabled={disabled}/>
            }
            {children}
        </button>
    )

    
    if (!href)
        return html
    return (
        <Link href={href} className={classNameLink}>{html}</Link>
    )
}

Button.Variant = ButtonVariant;
Button.Type = ButtonType;
Button.Color = ButtonColor;
Button.Size = ButtonSize;