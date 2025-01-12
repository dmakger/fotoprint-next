import { cls } from "@/shared/lib/classes.lib"
import cl from './_GalleryCounter.module.scss'

interface IGalleryCounter{
    className?: string,
    activeIndex?: number,
    listLength?: number

}

export const GalleryCounter = ({
    className,
    activeIndex = 0,
    listLength
}: IGalleryCounter) => {
    return (
        <div className={cls(cl.GalleryCounter, className)}>
            <span className={cl.activeItem}>{activeIndex+1}</span>
            /
            <span className={cl.outOfNumber}>{listLength}</span>
        </div>
    )
}
