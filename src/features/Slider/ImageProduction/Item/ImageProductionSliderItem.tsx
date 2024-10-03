import { FC } from "react"

import { getImage } from "@/shared/lib/image.lib";
import { IListItem } from "@/shared/model/list.model";
import { ImageProduction } from "@/shared/ui/Image/ui/Production/ui/ImageProduction";

interface ImageProductionSliderItemProps extends IListItem<string> {}

export const ImageProductionSliderItem:FC<ImageProductionSliderItemProps> = ({
    item: src,
    ...rest
}) => {
    return (
        <ImageProduction src={getImage(src)} {...rest} />
    )
}
