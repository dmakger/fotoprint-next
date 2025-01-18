import { IIcon } from '@/shared/model/icon.model'

import SearchFillWhite from '@/shared/assets/Search/SearchFillWhite.svg'
import SearchFillBlack from '@/shared/assets/Search/SearchFillBlack.svg'


export const SEARCH_WHITE__ICON: IIcon = {
    default: SearchFillWhite,
}


export const SEARCH_BLACK__ICON: IIcon = {
    default: SearchFillBlack,
}


export const SEARCH_WHITE_TO_BLACK__ICON: IIcon = {
    default: SearchFillWhite,
    defaultHovered: SearchFillBlack,
}