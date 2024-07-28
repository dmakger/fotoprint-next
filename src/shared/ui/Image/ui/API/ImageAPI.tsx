import { FC } from "react"
import Image from 'next/image'
import cl from './_ImageAPI.module.scss'
import { cls } from "@/shared/lib/classes.lib"
// import defaultImageJPG from '@/shared/assets/img/default-image.jpg'
import { getImage } from "@/shared/lib/image.lib"


interface ImageAPIProps {
    src: string
    alt?: string
    width?: number
    height?: number
    priority?: boolean
    quality?: number
    className?: string,
}

export const ImageAPI: FC<ImageAPIProps> = ({ src, alt, width = 40, height = 40, priority = true, quality=80, className }) => {
    return (
        <Image loader={() => src}
            unoptimized={true}
            // src={src ? getImage(src) : defaultImageJPG}
            src={getImage(src)}
            priority={priority}
            alt={alt ? alt : src}
            width={width ?? 100}
            height={height ?? 100}
            quality={quality < 1 || quality > 100 ? 80 : quality}
            // layout="responsive"
            className={cls(cl.image, className)}>
        </Image>
    )
}
